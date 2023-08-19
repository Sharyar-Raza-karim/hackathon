// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl-KJYXEkVt_T24Be8MCtPlaF0hgQ7Uac",
  authDomain: "mini-hackathon-2b48d.firebaseapp.com",
  projectId: "mini-hackathon-2b48d",
  storageBucket: "mini-hackathon-2b48d.appspot.com",
  messagingSenderId: "949713191281",
  appId: "1:949713191281:web:42efbed92ad3c93081f6d0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// ....................signup starts
let signup = document.getElementById("signup");
let name = document.getElementById("name");
let fname = document.getElementById('fname');

let popup = document.getElementById("alert");
let inputemail = document.getElementById("email");
let inputpassword = document.getElementById("password");

let signUp = () => {

  let email = inputemail.value;
  let password = inputpassword.value;
  let fullName = name.value + " " + fname.value;
  // console.log(fullName);

  createUserWithEmailAndPassword(auth, email, password)


    .then((userCredential) => {

      const user = userCredential.user;
      console.log("user", user);
      userCredential.user.displayName = fullName;
      inputemail.value="";
      inputpassword.value="";
      name.value="";
      fname.value="";



      if (userCredential == true) {
        console.log("no error")
      }
      else {


        popup.innerHTML = ` <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
          <use xlink:href="#check-circle-fill" />
        </svg>
        <div>
          Signed UP!!
        </div>
      </div>`;
        popup.style.display = "block";

        setTimeout(() => {
          popup.style.display = "none";
        }, 1000)

        console.log("nhi aya");

      }

    })

    .catch((error) => {

      const errorMessage = error.message;
      console.log("errorr", errorMessage);
      console.log(error.code)

      let errorDisplay = errorMessage.split("(auth/")[1].split(")")[0];


      if (error == true) {
        console.log("no error")
      }
      else {


        popup.innerHTML = ` <div class="alert alert-warning d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          ${errorDisplay}
        </div>
        </div>`;
        popup.style.display = "block";

        setTimeout(() => {
          popup.style.display = "none";
        }, 1000)

        console.log("nhi aya");

      }


    });
}
signup.addEventListener("click", signUp);


//.......................... SIGN UP COMPLETE

// ............................Login Start


let login = document.getElementById('logedIn');
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');


let logingIn = () => {
  let email = loginEmail.value;
  console.log(email);
  let password = loginPassword.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log("user", user);
      console.log(userCredential)

      if (userCredential == true) {
        console.log("no error")
      }
      else {


        popup.innerHTML = ` <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
          <use xlink:href="#check-circle-fill" />
        </svg>
        <div>
          You are Loged In!!
        </div>
      </div>`;
        popup.style.display = "block";

        setTimeout(() => {
          popup.style.display = "none";
        }, 1000)
        location.href="./dashboard.html";
        console.log("nhi aya");

      }

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("errorr", errorMessage);

      let errorDisplay = errorMessage.split("(auth/")[1].split(")")[0];


      if (error == true) {
        console.log("no error")
      }
      else {


        popup.innerHTML = ` <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          ${errorDisplay}
        </div>
      </div>`;
        popup.style.display = "block";

        setTimeout(() => {
          popup.style.display = "none";
        }, 1000)

        console.log("nhi aya");

      }

    });



}
login.addEventListener('click', logingIn);

      // .........................login Complete


