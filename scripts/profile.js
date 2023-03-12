var currentUser;          //put this right after you start script tag before writing any functions.

function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userAge = userDoc.data().Age;
                    var userGender = userDoc.data().Gender;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != "") {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userAge != "") {
                        document.getElementById("ageInput").value = userAge
                    if (userGender != "") {
                        document.getElementById("genderInput").value = userGender;
                    }
           }   })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateUserInfo();
function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
 }
 function saveUserInfo() {
    //a) get user entered values
    userName = document.getElementById('nameInput').value;
    userAge = document.getElementById('ageInput').value;
    userGender = document.getElementById('genderInput').value;

    //b) update user's document in Firestore
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

    //c) disable edit 
    document.getElementById('personalInfoFields').disabled = true;
}
