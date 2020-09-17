class Github {
  constructor() {
    this.client_id = 'ca7f9032848983017945';
    this.client_secret = '1f7968e5d8359bbee2d5062323f188686c50f266'
  }

  async getUser(user) {
    const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const userProfile = await userResponse.json();
    return {
      userProfile
    }
  }


}