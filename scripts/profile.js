
var currentUser;

function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid)
            currentUser.get()
                .then(userDoc => {
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
                })
        } else {
            console.log ("No user is signed in");
        }
    });
}

populateUserInfo();

function editUserInfo() {
    document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    userName = document.getElementById('nameInput').value;
    userAge = document.getElementById('ageInput').value;
    userGender = document.getElementById('genderInput').value;

    currentUser.update({
        name: userName,
        age: userAge,
        gender: userGender
    })
    .then(() => {
        console.log("User information updated successfully.");
    })
    .catch((error) => {
        console.error("Error updating user information: ", error);
    });

    document.getElementById('personalInfoFields').disabled = true;
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userId = user.uid;
      db.collection("records")
        .where("userId", "==", userId)
        .orderBy("timestamp", "desc")
        .limit(5)
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
  
          // Reverse the order of the list items and insert them at the top of the list
          listItems.reverse().forEach((li) => {
            collectionList.insertBefore(li, collectionList.firstChild);
          });
        })
        .catch((error) => {
          console.error("Error getting records: ", error);
        });
    }
  });
  
