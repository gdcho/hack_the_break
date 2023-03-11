//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
      }).catch((error) => {
        // An error happened.
      });
}
function loadSkeleton(){
  console.log($('#navbarPlaceholder').load('./text/nav.html'));
  console.log($('#footerPlaceholder').load('./text/footer.html'));
}
loadSkeleton();  //invoke the function