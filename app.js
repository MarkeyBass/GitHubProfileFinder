// Search input
const searchUser = document.getElementById('searchUser');
const gitHub = new GitHub(); 
const ui = new UI();

// Searchinput event listener
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText != ''){
    // console.log(userText)
    // Make http call
    gitHub.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show the profile
          // console.log(data)
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);

        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});