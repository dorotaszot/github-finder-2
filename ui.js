class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }


  showProfile(user) {

    this.profile.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Username: ${user.blog}</li>
    </ul>
    `
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    console.log(div);
    const alertPlaceholder = document.getElementById('alert-placeholder');
    alertPlaceholder.appendChild(div);

    setTimeout(() => {
      this.clearAlert()
    }, 2000);
  }



  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {

  }
}
