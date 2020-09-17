const github = new Github;
const ui = new UI;

const userInput = document.getElementById("user-text");

userInput.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  // console.log(userText);

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.userProfile.message === 'Not Found') {
          // Show  alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // Show profile
        }
      });
  } else {
    // Clear profile
  }
})