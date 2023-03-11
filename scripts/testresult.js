var currentUser;

function displayScoreInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then((userDoc) => {
        var userscore = userDoc.data().school;
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
