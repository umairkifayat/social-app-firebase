const express = require('express');
const app = express();

// Set Permissions-Policy header excluding 'interest-cohort'
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), interest-cohort=()');
  next();
});

// Rest of your server setup...

// Assume you have your other routes and middleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



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
    window.location = './log.html';
  }
});

// logout function
btnSignOut.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('logout successfully');
    window.location = './log.html';
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






























// import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { auth,db } from "./config.js";
// import { collection, addDoc,  getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";


// const form =document.querySelector('.form');
// const title =document.querySelector('.title')
// const des =document.querySelector('.description')
// const card =document.querySelector('.container')
// const btn1 = document.querySelector('.btn')


// // onauthstatechange function
// onAuthStateChanged(auth, (user) => {
//   if (user) {
   
//     const uid = user.uid;
//     console.log(uid)
//     const Toast = Swal.mixin({
//       toast: true,
//       position: 'top-end',
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.addEventListener('mouseenter', Swal.stopTimer)
//         toast.addEventListener('mouseleave', Swal.resumeTimer)
//       }
//     })
    
//     Toast.fire({
//       icon: 'success',
//       title: 'login successfully'
//     })
//   } else {
//     window.location='./log.html'
//   }
// });

// // logout function

// btn1.addEventListener('click',()=>{
// signOut(auth).then(() => {
//   console.log('logout successfully');

//   window.location = './log.html'
// }).catch((error) => {
//   console.log(error);
// });
// })
// // adding post



// const arr=[]
// async function getDataFromFirestore() {
// arr.length=0  
// const querySnapshot = await getDocs(collection(db, "post"));
// querySnapshot.forEach((doc) => {
// arr.push(doc.data())  
// console.log(arr)
// arr.map((item)=>{
// card.innerHTML += `<div class='inner-card'>  
// <p>Title:${item.Title}<p>
// <p>Description:${item.Description}<p>
// </div>`
// })
// }

// )};



// getDataFromFirestore()



// form.addEventListener('submit', async(e)=>{
// e.preventDefault();
// // card.innerHTML =''
// // console.log(title.value)
// // console.log(des.value)
// // console.log(auth.currentUser.uid)

// try {
//   const docRef = await addDoc(collection(db, "post"), {
//     Title: title.value,
//     Description: des.value,
//     uid:auth.currentUser.uid
  
//   });

//   console.log("Document written with ID: ", docRef.id);
//   getDataFromFirestore()
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// })

// // title.value=''
// // des.value=''

















// import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { auth, db } from "./config.js";
// import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// const form = document.querySelector('.form');
// const title = document.querySelector('.title')
// const des = document.querySelector('.description')
// const card = document.querySelector('.container')
// const btn1 = document.querySelector('.btn')

// // onauthstatechange function
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log(uid)
//     // const Toast = Swal.mixin({
//     //   toast: true,
//     //   position: 'top-end',
//     //   showConfirmButton: false,
//     //   timer: 3000,
//     //   timerProgressBar: true,
//     //   didOpen: (toast) => {
//     //     toast.addEventListener('mouseenter', Swal.stopTimer)
//     //     toast.addEventListener('mouseleave', Swal.resumeTimer)
//     //   }
//     // })

//     // Toast.fire({
//     //   icon: 'success',
//     //   title: 'login successfully'
//     // })
//   } else {
//     window.location = './login.html'
//   }
// });

// // logout function
// btn1.addEventListener('click', () => {
//   signOut(auth).then(() => {
//     console.log('logout successfully');
//     window.location = './log.html'
//   }).catch((error) => {
//     console.log(error);
//   });
// })

// // getDataFromFirestore function to retrieve data from Firestore
// async function getDataFromFirestore() {
//   const arr = [];
//   const querySnapshot = await getDocs(collection(db, "post"));
//   querySnapshot.forEach((doc) => {
//     arr.push(doc.data())
//   });
//   return arr;
// }

// // renderData function to render data on the HTML page
// function renderData(data) {
//   card.innerHTML = '';
//   data.forEach((item) => {
//     card.innerHTML += `<div class='inner-card'>  
//       <p>Title: ${item.Title}</p>
//       <p>Description: ${item.Description}</p>
//     </div>`;
//   });
// }

// // Event listener for form submission
// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   try {
//     await addDoc(collection(db, "post"), {
//       Title: title.value,
//       Description: des.value,
//       uid: auth.currentUser.uid
//     });

//     title.value = '';
//     des.value = '';
//     console.log("Document added successfully");
    
//     // Fetch and render updated data after adding a new document
//     const updatedData = await getDataFromFirestore();
//     renderData(updatedData);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });

// // Initial data retrieval and rendering
// (async () => {
//   const initialData = await getDataFromFirestore();
//   renderData(initialData);
// })();










// import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { auth, db } from "./config.js";
// import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// const form = document.querySelector('.form');
// const title = document.querySelector('.title');
// const des = document.querySelector('.description');
// const card = document.querySelector('.container');
// const btn1 = document.querySelector('.btn');

// // onauthstatechange function
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log(uid);
//     const Toast = Swal.mixin({
//       toast: true,
//       position: 'top-end',
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.addEventListener('mouseenter', Swal.stopTimer);
//         toast.addEventListener('mouseleave', Swal.resumeTimer);
//       }
//     });

//     Toast.fire({
//       icon: 'success',
//       title: 'login successfully'
//     });
//   } else {
//     window.location = './log.html';
//   }
// });

// // logout function
// btn1.addEventListener('click', () => {
//   signOut(auth).then(() => {
//     console.log('logout successfully');
//     window.location = './log.html';
//   }).catch((error) => {
//     console.log(error);
//   });
// });

// // adding post
// const arr = [];

// async function getDataFromFirestore() {
//   arr.length = 0;
//   const querySnapshot = await getDocs(collection(db, "post"));
//   querySnapshot.forEach((doc) => {
//     arr.push(doc.data());
//   });

//   arr.forEach((item) => {
//     card.innerHTML += `<div class='inner-card'>  
//       <p>Title: ${item.Title}</p>
//       <p>Description: ${item.Description}</p>
//     </div>`;
//   });
// }

// getDataFromFirestore();

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   card.innerHTML = '';

//   try {
//     const docRef = await addDoc(collection(db, "post"), {
//       Title: title.value,
//       Description: des.value,
//       uid: auth.currentUser.uid
//     });

//     title.value = '';
//     des.value = '';
//     console.log("Document written with ID: ", docRef.id);
//     getDataFromFirestore();
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });
