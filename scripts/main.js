function getRandomQuote() {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursady', 'friday', 'saturday'];
  const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
  const randomDay = daysOfWeek[randomIndex];
  
  db.collection("quotes").doc(randomDay)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const quote = doc.data().quote;
        document.getElementById("quote-goes-here").innerHTML = quote;
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

// 호출해서 랜덤 명언을 표시할 요소가 있을 때
getRandomQuote();

function insertNameFromFirestore() {
  //check if user is logged in
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //if user logged in
      console.log(user.uid);
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((userDoc) => {
          console.log(userDoc.data().name);
          userName = userDoc.data().name;
          console.log(userName);
          document.getElementById("name-goes-here").innerHTML = userName;
        });
    }
  });
}

insertNameFromFirestore();

function writeQuestions() {
  var questionsRef = db.collection("questions");

  questionsRef.add({
    id: "q01",
    question:
      "I have often succeeded on a test or task even though I was afraid that I would not do well before I undertook the task.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q02",
    question:
      "I can give the impression that I’m more competent than I really am.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q03",
    question:
      "I avoid evaluations if possible and have a dread of others evaluating me.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q04",
    question:
      "When people praise me for something I’ve accomplished, I’m afraid I won’t be able to live up to their expectations of me in the future.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q05",
    question:
      "I sometimes think I obtained my present position or gained my present success because I happened to be in the right place at the right time or knew the right people.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q06",
    question:
      "I’m afraid people important to me may find out that I’m not as capable as they think I am.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q07",
    question:
      "I tend to remember the incidents in which I have not done my best more than those times I have done my best.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q08",
    question: "I rarely do a project or task as well as I’d like to do it.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q09",
    question:
      "Sometimes I feel or believe that my success in my life or in my job has been the result of some kind of error.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q10",
    question:
      "It’s hard for me to accept compliments or praise about my intelligence or accomplishments.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q11",
    question: "At times, I feel my success has been due to some kind of luck.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q12",
    question:
      "I’m disappointed at times in my present accomplishments and think I should have accomplished much more.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q13",
    question:
      "Sometimes I’m afraid others will discover how much knowledge or ability I really lack.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q14",
    question:
      "I’m often afraid that I may fail at a new assignment or undertaking even though I generally do well at what I attempt.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q15",
    question:
      "When I’ve succeeded at something and received recognition for my accomplishments, I have doubts that I can keep repeating that success.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q16",
    question:
      "If I receive a great deal of praise and recognition for something I’ve accomplished, I tend to discount the importance of what I’ve done.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q17",
    question:
      "I often compare my ability to those around me and think they may be more intelligent than I am.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q18",
    question:
      "I often worry about not succeeding with a project or examination, even though others around me have considerable confidence that I will do well.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q19",
    question:
      "If I’m going to receive a promotion or gain recognition of some kind, I hesitate to tell others until it is an accomplished fact.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
  questionsRef.add({
    id: "q20",
    question:
      "I feel bad and discouraged if I’m not “the best” or at least “very special” in situations that involve achievement.",
    answer01: { text: "(not all true)", points: 1 },
    answer02: { text: "(rarely)", points: 2 },
    answer03: { text: "(sometimes)", points: 3 },
    answer04: { text: "(often)", points: 4 },
    answer05: { text: "(very true)", points: 5 },
  });
}

// modal
var modal = document.getElementById("myModal");
// modal button
var btn = document.getElementById("myBtn");
// open modal on click
btn.onclick = function() {
  modal.style.display = "block";
}
// close module click anywhere
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
    window.location.href = "form.html";
  }
}
function closeModal() {
  modal.style.display = "none";
}