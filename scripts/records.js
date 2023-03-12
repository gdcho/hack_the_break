firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userId = user.uid;
      db.collection("records").where("userId", "==", userId)
        .limit(10)
        .get()
        .then((querySnapshot) => {
          const collectionList = document.querySelector("#collection-list");
          const listItems = [];
          querySnapshot.forEach((doc) => {
            const li = document.createElement("li");
            const timestamp = new Date(doc.data().timestamp.seconds * 1000);
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            const formattedTimestamp = timestamp.toLocaleString('en-US', options);
            const totalScore = doc.data().totalScore;
            li.textContent = `${formattedTimestamp} - Score: ${totalScore}`;
            listItems.push(li);
          });
          listItems.reverse().forEach((li) => {
            collectionList.appendChild(li);
          });
        })
        .catch((error) => {
          console.error("Error getting records: ", error);
        });
    }
  });
  