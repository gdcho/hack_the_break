
function readQuote(day) {
  db.collection("quotes").doc(day)                                                      //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(tuesdayDoc => {                                                               //arrow notation
         console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
         document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
         
         //Here are other ways to access key-value data fields
         //$('#quote-goes-here').text(tuesdayDoc.data().quote);         //using jquery object dot notation
         //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);      //using json object indexing
         //document.querySelector("#quote-goes-here").innerHTML = tuesdayDoc.data().quote;
    })
}
readQuote("tuesday");        //calling the function
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
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q02",
    question:
      "I can give the impression that I’m more competent than I really am.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q03",
    question:
      "I avoid evaluations if possible and have a dread of others evaluating me.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q04",
    question:
      "When people praise me for something I’ve accomplished, I’m afraid I won’t be able to live up to their expectations of me in the future.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q05",
    question:
      "I sometimes think I obtained my present position or gained my present success because I happened to be in the right place at the right time or knew the right people.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q06",
    question:
      "I’m afraid people important to me may find out that I’m not as capable as they think I am.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q07",
    question:
      "I tend to remember the incidents in which I have not done my best more than those times I have done my best.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q08",
    question: "I rarely do a project or task as well as I’d like to do it.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q09",
    question:
      "Sometimes I feel or believe that my success in my life or in my job has been the result of some kind of error.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q10",
    question:
      "It’s hard for me to accept compliments or praise about my intelligence or accomplishments.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q11",
    question: "At times, I feel my success has been due to some kind of luck.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q12",
    question:
      "I’m disappointed at times in my present accomplishments and think I should have accomplished much more.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q13",
    question:
      "Sometimes I’m afraid others will discover how much knowledge or ability I really lack.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q14",
    question:
      "I’m often afraid that I may fail at a new assignment or undertaking even though I generally do well at what I attempt.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q15",
    question:
      "When I’ve succeeded at something and received recognition for my accomplishments, I have doubts that I can keep repeating that success.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q16",
    question:
      "If I receive a great deal of praise and recognition for something I’ve accomplished, I tend to discount the importance of what I’ve done.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q17",
    question:
      "I often compare my ability to those around me and think they may be more intelligent than I am.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q18",
    question:
      "I often worry about not succeeding with a project or examination, even though others around me have considerable confidence that I will do well.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q19",
    question:
      "If I’m going to receive a promotion or gain recognition of some kind, I hesitate to tell others until it is an accomplished fact.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
  questionsRef.add({
    id: "q20",
    question:
      "I feel bad and discouraged if I’m not “the best” or at least “very special” in situations that involve achievement.",
    answer01: { text: "1 (not all true)", points: 1 },
    answer02: { text: "2 (rarely)", points: 2 },
    answer03: { text: "3 (sometimes)", points: 3 },
    answer04: { text: "4 (often)", points: 4 },
    answer05: { text: "5 (very true)", points: 5 },
  });
}



//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("hikeCardTemplate");

  db.collection(collection)
    .get() //the collection called "hikes"
    .then((allHikes) => {
      //var i = 1;  //Optional: if you want to have a unique ID for each hike
      allHikes.forEach((doc) => {
        //iterate thru each doc
        var title = doc.data().name; // get value of the "name" key
        var details = doc.data().details; // get value of the "details" key
        var hikeCode = doc.data().code; //get unique ID to each hike to be used for fetching right image
        var hikeLength = doc.data().length; //gets the length field
        var docID = doc.id;
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image
        newcard.querySelector(".card-title").innerHTML = title;
        newcard.querySelector(".card-length").innerHTML = hikeLength + "km";
        newcard.querySelector(".card-text").innerHTML = details;
        newcard.querySelector(".card-image").src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg
        newcard.querySelector("a").href = "eachHike.html?docID=" + docID;

        //Optional: give unique ids to all elements for future use
        // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
        // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
        // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

        //attach to gallery, Example: "hikes-go-here"
        document.getElementById(collection + "-go-here").appendChild(newcard);

        //i++;   //Optional: iterate variable to serve as unique ID
      });
    });
}

displayCardsDynamically("hikes"); //input param is the name of the collection
