function retrieveQuestions() {
    db.collection("questions").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var question = doc.data().question;
        var answers = [
          doc.data().answer01,
          doc.data().answer02,
          doc.data().answer03,
          doc.data().answer04,
          doc.data().answer05,
        ];
  
        // Create radio button form for each question
        var questionForm = document.createElement("form");
        questionForm.innerHTML = "<p>" + question + "</p>";
        for (var i = 0; i < answers.length; i++) {
          var radioInput = document.createElement("input");
          radioInput.type = "radio";
          radioInput.name = doc.id;
          radioInput.value = answers[i].points;
          questionForm.appendChild(radioInput);
          questionForm.innerHTML += "<label>" + answers[i].text + "</label><br/>";
        }
        document.getElementById("questions-form").appendChild(questionForm);
      });
    });
  }
  
  // Submit answers
  function submitAnswers() {
    var answers = {};
    var forms = document.querySelectorAll("form");
    for (var i = 0; i < forms.length; i++) {
      var formInputs = forms[i].querySelectorAll("input");
      for (var j = 0; j < formInputs.length; j++) {
        if (formInputs[j].checked) {
          answers[formInputs[j].name] = parseInt(formInputs[j].value);
          break;
        }
      }
    }
  
    // Do something with the answers (e.g. send to server, show results, etc.)
    console.log(answers);
  }
  
  // Call retrieveQuestions() on page load
  window.onload = retrieveQuestions;