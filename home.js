import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const form = document.querySelector('.form');
const title = document.querySelector('.title');
const des = document.querySelector('.description');
const postContainer = document.getElementById('postContainer');
const btnSignOut = document.getElementById('btnSignOut');

// onauthstatechange function
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'login successfully'
    });
  } else {
    window.location = './index.html';
  }
});

// logout function
btnSignOut.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('logout successfully');
    window.location = './index.html';
  }).catch((error) => {
    console.log(error);
  });
});

// adding post
const arr = [];

async function getDataFromFirestore() {
  arr.length = 0;
  const querySnapshot = await getDocs(collection(db, "post"));
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });

  postContainer.innerHTML = ''; // Clear the container before appending new data

  arr.forEach((item) => {
    postContainer.innerHTML += `<div class='inner-card'>  
      <p>Title: ${item.Title}</p>
      <p>Description: ${item.Description}</p>
    </div>`;
  });
}

getDataFromFirestore();

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "post"), {
      Title: title.value,
      Description: des.value,
      uid: auth.currentUser.uid
    });

    title.value = '';
    des.value = '';
    console.log("Document written with ID: ", docRef.id);
    getDataFromFirestore();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});































