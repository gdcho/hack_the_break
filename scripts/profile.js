var currentUser;

function populateUserInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then((userDoc) => {
        var userName = userDoc.data().name;
        var userAge = userDoc.data().age; // age로 수정
        var userGender = userDoc.data().gender; // gender로 수정

        if (userName != "") {
          document.getElementById("nameInput").value = userName;
        }
        if (userAge != "") {
          document.getElementById("ageInput").value = userAge;
        }
        if (userGender != "") {
          document.getElementById("genderInput").value = userGender;
        }
      });
    } else {
      console.log("No user is signed in");
    }
  });
}

populateUserInfo();

function editUserInfo() {
  document.getElementById("personalInfoFields").disabled = false;
}

function saveUserInfo() {
  userName = document.getElementById("nameInput").value;
  userAge = document.getElementById("ageInput").value;
  userGender = document.getElementById("genderInput").value;

  currentUser
    .update({
      name: userName,
      age: userAge,
      gender: userGender,
    })
    .then(() => {
      console.log("User information updated successfully.");
      // modal
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function () {
        modal.style.display = "none";
      }, 2000);
    });
  document.getElementById("personalInfoFields").disabled = true;
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const userId = user.uid;
    db.collection("records")
      .where("userId", "==", userId)
      .orderBy("timestamp", "desc")
      .limit(4)
      .get()
      .then((querySnapshot) => {
        const collectionList = document.querySelector("#collection-list");
        const listItems = [];
        querySnapshot.forEach((doc) => {
          const li = document.createElement("li");
          const timestamp = new Date(doc.data().timestamp.seconds * 1000);
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          };
          const formattedTimestamp = timestamp.toLocaleDateString(
            "en-US",
            options
          );
          const totalScore = doc.data().totalScore;
          li.textContent = `${formattedTimestamp} - Score: ${totalScore}`;
          listItems.push(li);
        });

        // Reverse list order
        listItems.reverse().forEach((li) => {
          collectionList.insertBefore(li, collectionList.firstChild);
        });
      });
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("logging out user");
      // Open modal1
      document.getElementById("modal1").style.display = "block";
      // Close modal1 after 2 seconds
      setTimeout(function () {
        document.getElementById("modal1").style.display = "none";
        // Redirect to main.html
        window.location.href = "index.html";
      }, 2000);
    })
    .catch((error) => {
      // An error happened.
    });
}

