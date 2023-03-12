var currentQuestionIndex = 0;
var questionsPerPage = 5;
var currentPageIndex = 0;
var submitButton = null;

function retrieveQuestions() {
  db.collection("questions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var question = doc.data().question;
      var answers = [        doc.data().answer01,        doc.data().answer02,        doc.data().answer03,        doc.data().answer04,        doc.data().answer05,      ];

      //Radio button for each question
      var questionForm = document.createElement("form");
      questionForm.innerHTML = "<p>" + question + "</p>";
      for (var i = 0; i < answers.length; i++) {
        var radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = doc.id;
        radioInput.value = answers[i].points;
        radioInput.classList.add("form-check-input");

        var label = document.createElement("label");
        label.innerHTML = answers[i].text;
        label.classList.add("form-check-label");

        var formCheck = document.createElement("div");
        formCheck.classList.add("form-check", "form-check-inline");
        formCheck.appendChild(radioInput);
        formCheck.appendChild(label);
        questionForm.appendChild(formCheck);
      }

      document.getElementById("questions-form").appendChild(questionForm);
      questionForm.classList.add("question");
    });
    showQuestions(0);
  });
}

function showQuestions(startIndex) {
  var questions = document.querySelectorAll(".question");
  var endIndex = Math.min(startIndex + questionsPerPage, questions.length);
  for (var i = 0; i < questions.length; i++) {
    if (i >= startIndex && i < endIndex) {
      questions[i].style.display = "block";
    } else {
      questions[i].style.display = "none";
    }
  }
  updateNavigation(startIndex, endIndex, questions.length);
}

function updateNavigation(startIndex, endIndex, totalQuestions) {
  var prevButton = document.getElementById("prev-button");
  var nextButton = document.getElementById("next-button");
  prevButton.disabled = startIndex == 0;
  nextButton.disabled = endIndex == totalQuestions;

  if (submitButton && submitButton.parentNode) {
    submitButton.parentNode.removeChild(submitButton);
  }

  if (endIndex == totalQuestions) {
    submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.id = "submit-button";
    submitButton.addEventListener("click", submitAnswers);
    navigationContainer.appendChild(submitButton);
  }

  if (nextButton.disabled) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

function onNext() {
  currentQuestionIndex += questionsPerPage;
  currentPageIndex += 1;
  showQuestions(currentQuestionIndex);
}
  
function onPrev() {
  currentQuestionIndex -= questionsPerPage;
  currentPageIndex -= 1;
  showQuestions(currentQuestionIndex);
}
  
function submitAnswers() {
  var forms = document.querySelectorAll("form");
  
  //Update score
  var totalScore = 0;
  var allAnswered = true; 
  for (var i = 0; i < forms.length; i++) {
    var selectedAnswer = forms[i].querySelector("input[type='radio']:checked");
    if (selectedAnswer) {
      var points = parseInt(selectedAnswer.value);
      totalScore += points;
    } else {
      allAnswered = false;
    }
  }
  
  if (allAnswered) {
    console.log("Total score: " + totalScore);
  
    // Update the user with the new score
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users").doc(user.uid).update({
          totalScore,
          timestamp: firebase.firestore.Timestamp.now()
        })
        db.collection("records").add({
          userId: user.uid,
          totalScore: totalScore,
          timestamp: firebase.firestore.Timestamp.now()
        })
        .then(() => {
          console.log("Score updated successfully");
          window.location.href = 'testresult.html';
        })
        .catch((error) => {
          console.error("Error updating score: ", error);
        });
      }
    });
  } else {
    alert("Please answer all questions before submitting.");
  }
}


// Call retrieveQuestions() on page load
window.onload = retrieveQuestions;

// Nav buttons
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", function() {
  onPrev();
});

nextButton.addEventListener("click", function() {
  onNext();
});

var navigationContainer = document.getElementById("navigation-container");
navigationContainer.appendChild(prevButton);
navigationContainer.appendChild(nextButton);
if (currentPageIndex == 4 && submitButton) {
    navigationContainer.appendChild(submitButton);
}

