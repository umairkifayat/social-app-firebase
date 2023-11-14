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


import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('.form')
const pass = document.querySelector('.pass')
const email = document.querySelector('.email')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
    const user = userCredential.user;
console.log(user);
        window.location = './home.html'
    })
    .catch((error) => {
        
        Swal.fire({
            title: error,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            
        });
    
    email.value = ''
    pass.value = ''
    })
    
    
    
    
