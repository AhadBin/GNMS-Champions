var app;
var auth;
var database;
var inputEmail;
var inputPassword;
var buttonSignIn;
var buttonUpdate;
var inputUpdate;

function setup() {
  noCanvas();

  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAX8pwHV753YkKxbCTYV-hGIQSyS3zWsHw",
    authDomain: "gnms-champions.firebaseapp.com",
    databaseURL: "https://gnms-champions-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gnms-champions",
    storageBucket: "gnms-champions.appspot.com",
    messagingSenderId: "418635478536",
    appId: "1:418635478536:web:3f412a862bd491e5b903bd"
  };
  app = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  database = firebase.database();

  // Create HTML elements
  inputEmail = createInput('Email');
  inputEmail.position(windowWidth/2 - 50, windowHeight/2 - 100);
  inputPassword = createInput('Password', 'password');
  inputPassword.position(windowWidth/2 - 50, windowHeight/2 - 70);
  buttonSignIn = createButton('Sign In');
  buttonSignIn.position(windowWidth/2 - 50, windowHeight/2 - 40);

  // Add event listeners
  buttonSignIn.mousePressed(signIn);
  buttonUpdate.mousePressed(updateDatabase);
}

function signIn() {
  var email = inputEmail.value();
  var password = inputPassword.value();
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('User signed in');

      inputUpdatePlace_grade = createInput("Grade");
      inputUpdatePlace_section = createInput("Section");
      inputUpdatePlace_name = createInput("Full Name");
      inputUpdatePlace_stars = createInput("Number of stars given");
      buttonUpdate = createButton('Update');
      inputUpdatePlace_grade.position(windowWidth/2 - 50, windowHeight/2 - 150);
      inputUpdatePlace_section.position(windowWidth/2 - 50, windowHeight/2 - 125);
      inputUpdatePlace_name.position(windowWidth/2 - 50, windowHeight/2 - 100);
      inputUpdatePlace_stars.position(windowWidth/2 - 50, windowHeight/2 - 75);
      buttonUpdate.position(windowWidth/2 - 50, windowHeight/2 - 50);
      inputPassword.position(-100, -100);
      inputEmail.position(-100, -100);
      buttonSignIn.position(-100, -100);
    })
    .catch((error) => {
      text('Error: please retry', buttonSignIn.x, buttonSignIn.y + 10);
    });
}

function updateDatabase() {
  var newData = inputUpdatePlace_stars.value();
  database.ref(inputUpdatePlace_grade + "/"+ inputUpdatePlace_section + "/Students/" + inputUpdatePlace_name).set(newData)
    .then(() => {
      console.log('Database updated');
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}

function draw(){
  background('black');
}

/*      if (email == "ahadbin.a_nms@gemselearning.com" || email == "rishit.s_nms@gemselearning.com" || email == "meerhasan.a_nms@gemselearning.com" || email == "srinihas.a1_nms@gemselearning.com"){
        console.log("Access granted")
        inputUpdatePlace_grade = createInput("Grade");
        inputUpdatePlace_section = createInput("Section");
        buttonUpdate = createButton('Show list');
        inputUpdatePlace_grade.position(windowWidth/2 - 50, windowHeight/2 - 125);
        inputUpdatePlace_section.position(windowWidth/2 - 50, windowHeight/2 - 100);
        buttonUpdate.position(windowWidth/2 - 50, windowHeight/2 - 50);
        inputPassword.position(-100, -100);
        inputEmail.position(-100, -100);
        buttonSignIn.position(-100, -100);
        students_array = database.ref(str(inputUpdatePlace_grade) + "/" + str(inputUpdatePlace_section) + "/Students")
        for (let index = 0; index < students_array.length; index++) {
          text(students_array[index], 20, 20+(index*10))
          print("IT WORKS")
        }
        
      } else { */