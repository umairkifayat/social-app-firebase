// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { auth, db } from './config.js';
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// // import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

// const email = document.querySelector('.email');
// const password = document.querySelector('.password');
// const confirmpassword = document.querySelector('.c-password');
// const username = document.querySelector('.username');
// const btn = document.querySelector('.btn');
// // const Photo = document.querySelector('.img');
// // const already = document.querySelector('.already');
// // console.log(already);

// // already.addEventListener('click',()=>{
// //     window.location = './log.html'
// // })







// btn.addEventListener("click", async (event) => {
//     event.preventDefault();

//     if (email.value === '' || password.value === '' || confirmpassword.value === '' || username.value === '') {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Please complete all fields.',
//             confirmButtonText: 'OK'
//         });
//         return;
//     }

//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
//         const user = userCredential.user;
//         console.log(user);

//         // const files = Photo.files[0];
//         // const storageRef = ref(storage, email.value);

//         // await uploadBytes(storageRef, files);
        
//         // // Get the download URL once the file is uploaded
//         // const url = await getDownloadURL(storageRef);

//         await addDoc(collection(db, "users"), {
//             firstName: username.value,
//             Email: email.value,
//             uid: user.uid,
//             profileUrl: url
//         });

//         console.log('User registered successfully');
//         window.location = './home.html';
//     } catch (error) {
//         console.error(error);

//         // Handle errors, show messages, etc.
//     }
// });













import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from './config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmpassword = document.querySelector('.c-password');
const username = document.querySelector('.username');
const btn = document.querySelector('.btn');
// const Photo = document.querySelector('.img');
// const already = document.querySelector('.already');
// console.log(already);

// already.addEventListener('click',()=>{
//     window.location = './log.html'
// })

btn.addEventListener("click", async (event) => {
    event.preventDefault();

    if (email.value === '' || password.value === '' || confirmpassword.value === '' || username.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please complete all fields.',
            confirmButtonText: 'OK'
        });
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        console.log(user);

        // Uncomment this block if you want to handle profile picture upload
        // const files = Photo.files[0];
        // const storageRef = ref(storage, email.value);
        // await uploadBytes(storageRef, files);
        // const url = await getDownloadURL(storageRef);

        await addDoc(collection(db, "users"), {
            firstName: username.value,
            Email: email.value,
            uid: user.uid,
            // profileUrl: url // Uncomment this line if you want to store the profile picture URL
        });

        console.log('User registered successfully');
        window.location = './home.html';
    } catch (error) {
        console.error(error);
        // Handle errors, show messages, etc.
    }
});
