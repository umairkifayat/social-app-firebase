

import {  createUserWithEmailAndPassword ,uploadBytes } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth, } from "./config.js";



const form = document.querySelector('.form')
const pass = document.querySelector('.pass')
const email = document.querySelector('.email')
const names = document.querySelector('.names')
const img = document.querySelector('.file')



form.addEventListener('submit',(event) =>{
event.preventDefault()
createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    
    Swal.fire({
        title: 'Registration successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
        const storageRef = ref(storage, names.value);
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log('Uploaded a blob or file!');
});
    
    email.value = ''
    password.value = ''
    window.location = './home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    Swal.fire({
        title: `Email is alredy in use`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
  });
})
