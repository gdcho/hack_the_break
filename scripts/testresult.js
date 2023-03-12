var currentUser;

function displayScoreInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then((userDoc) => {
        var userscore = userDoc.data().totalScore;
        // test use school data instead of score data
        if (userscore != null) {
          document.getElementById("userscore").innerHTML = userscore;
          console.log(userscore);
        }
      });
    } else {
      console.log("No score data is available");
    }
  });
}
displayScoreInfo();

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
    window.location.href = "main.html";
  }
}
function closeModal() {
  modal.style.display = "none";
}
