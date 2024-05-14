function showQuiz() {
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('home').style.display = 'none';
}

const questions = [
    "Quelle est la meilleure façon de réduire les déchets?",
    "Pourquoi est-il important de consommer local?",
    "Comment pouvez-vous économiser de l'énergie à la maison?"
];

let currentQuestionIndex = 0;

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById('quizQuestion').innerText = questions[currentQuestionIndex];
    } else {
        document.getElementById('quizQuestion').innerText = "Merci d'avoir terminé le quiz!";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Merci pour votre message!");
});

// Initialize Firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID"
  };
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  // Function to load quiz questions from Firebase
  function loadQuizQuestions() {
    db.collection("quizQuestions").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        questions.push(doc.data().question);
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    loadQuizQuestions();
  });
  
  function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.classList.contains("menu-open")) {
        menu.classList.remove("menu-open");
    } else {
        menu.classList.add("menu-open");
    }
}