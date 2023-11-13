// Set Permissions-Policy header
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  next();
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
    
    
    
    
