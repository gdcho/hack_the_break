function readQuote( day ) {
    db.collection( "quotes" ).doc( day ).onSnapshot( tuesdayDoc => {
        console.log("inside")
        console.log( tuesdayDoc.data() )
        document.getElementById( "quote-goes-here" ).innerHTML = tuesdayDoc.data().quote;
    } )

}
readQuote( "tuesday" )

function insertNameFromFirestore() {
    //check if user is logged in
    firebase.auth().onAuthStateChanged( user => {
        if ( user ) { //if user logged in
            console.log( user.uid )
            db.collection( "users" ).doc( user.uid ).get().then( userDoc => {
                console.log( userDoc.data().name )
                userName = userDoc.data().name;
                console.log( userName )
                document.getElementById( "name-goes-here" ).innerHTML = userName;

            } )
        }
    } )

}
insertNameFromFirestore();

function writeQuestions() {
    var questionsRef = db.collection("questions");
    quizzesRef.add({
      id: "q001",
      question: "I have often succeeded on a test or task even though I was afraid that I would not do well before I undertook the task.",
      answer: [
        { text: "1 (not all true)", points: 1 },
        { text: "2 (rarely)", points: 2 },
        { text: "3 (sometimes)", points: 3 },
        { text: "4 (often)", points: 4 },
        { text: "5 (very true)", points: 5 }
      ],
    });
    quizzesRef.add({
      id: "q002",
      question: "I can give the impression that I’m more competent than I really am.",
      answer: [
        { text: "1 (not all true)", points: 1 },
        { text: "2 (rarely)", points: 2 },
        { text: "3 (sometimes)", points: 3 },
        { text: "4 (often)", points: 4 },
        { text: "5 (very true)", points: 5 }
      ],
    });
    quizzesRef.add({
      id: "q003",
      question: "I avoid evaluations if possible and have a dread of others evaluating me.",
      answer: [
        { text: "1 (not all true)", points: 1 },
        { text: "2 (rarely)", points: 2 },
        { text: "3 (sometimes)", points: 3 },
        { text: "4 (often)", points: 4 },
        { text: "5 (very true)", points: 5 }
      ],
    });
}

//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("hikeCardTemplate");

    db.collection(collection).get()   //the collection called "hikes"
        .then(allHikes=> {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allHikes.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;       // get value of the "name" key
                var details = doc.data().details;  // get value of the "details" key
				var hikeCode = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                var hikeLength = doc.data().length; //gets the length field
                var docID = doc.id;
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-length').innerHTML = hikeLength +"km";
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg
                newcard.querySelector('a').href = "eachHike.html?docID="+docID;

                //Optional: give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery, Example: "hikes-go-here"
                document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
            })
        })
}

displayCardsDynamically("hikes");  //input param is the name of the collection
