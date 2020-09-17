class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }


  showProfile(user) {

    this.profile.innerHTML = `
    <div class="card-body border-secondary mb-3 container">
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" class='img-fluid'>
          <button type="button" class="btn btn-block btn-primary mt-3" href="${user.url}" style="font-size: 16px">Profile</button>
        </div>
        <div class="col-md-9">
          <span class="badge badge-secondary p-2 mr-2" style="font-size: 16px">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-success p-2 mr-2" style="font-size: 16px">Followers: ${user.followers}</span>
          <span class="badge badge-warning p-2 mr-2" style="font-size: 16px">Following: ${user.following}</span>
          <span class="badge badge-info p-2 mr-2" style="font-size: 16px">Public Gists: ${user.following}</span>
          <ul class="list-group mt-3">
            <li class="list-group-item">Username: ${user.login}</li>
            <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog}</a></li>
        
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">User since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
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
    this.profile.innerHTML = '';
  }
}
