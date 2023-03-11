var currentQuestionIndex = 0;
var questionsPerPage = 5;
var currentPageIndex = 0;

function retrieveQuestions() {
    db.collection("questions").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var question = doc.data().question;
        var answers = [          doc.data().answer01,          doc.data().answer02,          doc.data().answer03,          doc.data().answer04,          doc.data().answer05,        ];
  
        // Create radio button form for each question
        var questionForm = document.createElement("form");
        questionForm.innerHTML = "<p>" + question + "</p>";
        for (var i = 0; i < answers.length; i++) {
          var radioInput = document.createElement("input");
          radioInput.type = "radio";
          radioInput.name = doc.id;
          radioInput.value = answers[i].points;
          radioInput.classList.add("form-check-input"); // Add the form-check-input class to the radio input
  
          var label = document.createElement("label");
          label.innerHTML = answers[i].text;
          label.classList.add("form-check-label"); // Add the form-check-label class to the label
  
          var formCheck = document.createElement("div");
          formCheck.classList.add("form-check", "form-check-inline"); // Add the form-check and form-check-inline classes to the div container
          formCheck.appendChild(radioInput);
          formCheck.appendChild(label);
          questionForm.appendChild(formCheck);
        }
  
        document.getElementById("questions-form").appendChild(questionForm);
        questionForm.classList.add("question");
      });
      showQuestions(0);
  
      // Add Submit button
      var questions = document.querySelectorAll(".question");
      var numPages = Math.ceil(questions.length / questionsPerPage);
      if (currentPageIndex === numPages - 1) {
        var submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submit-button";
        submitButton.addEventListener("click", submitAnswers);
        document.getElementById("questions-form").appendChild(submitButton);
      }
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
    var answers = {};
    var forms = document.querySelectorAll("form");

  // Do something with the answers (e.g. send to server, show results, etc.)
  console.log(answers);
}

// Call retrieveQuestions() on page load
window.onload = retrieveQuestions;

// Add navigation buttons
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
navigationContainer.appendChild(submitButton);
