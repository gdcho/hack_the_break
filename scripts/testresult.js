var currentUser;

function displayScoreInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then((userDoc) => {
        var userscore = userDoc.data().totalscore;
        // test use school data instead of scrore data
        if (userscore != null) {
          document.getElementById("userscore").innerHTML = userscore;
        }
      });
    } else {
      console.log("No score data is available");
    }
  });
}
displayScoreInfo();

var modal = document.getElementById("save-modal");
var backdrop = document.getElementById("backdrop");

function openModal() {
  //   modal.classList.add("show");
  //   document.body.classList.add("modal-open");
  backdrop.style.display = "block";
  modal.style.display = "block";
  modal.classList.add("show");
}
function closeModal() {
  //   modal.classList.remove("show");
  //   document.body.classList.remove("modal-open");
  backdrop.style.display = "none";
  modal.style.display = "none";
  modal.classList.remove("show");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
    window.location.href="main.html";
  }
};
