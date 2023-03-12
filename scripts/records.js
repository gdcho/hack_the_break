firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userId = user.uid;
      db.collection("records").where("userId", "==", userId)
        .limit(10)
        .get()
        .then((querySnapshot) => {
          const collectionList = document.querySelector("#collection-list");
          querySnapshot.forEach((doc) => {
            // create a new list item element for each record
            const li = document.createElement("li");
            // set the text content of the list item to the record data
            li.textContent = JSON.stringify(doc.data());
            // append the list item to the collection list element
            collectionList.appendChild(li);
          });
        })
        .catch((error) => {
          console.error("Error getting records: ", error);
        });
    }
  });