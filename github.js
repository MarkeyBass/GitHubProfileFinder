// https://docs.github.com/en/rest
// https://github.com/settings/applications/1497864
// https://github.com/settings/applications/new
// Google search: register github oauth

class GitHub {
  constructor() {
    this.client_id = "5a265926d4a296d0fcfa";
    this.client_secret = 'ab15651a8e9f865468ad4b768d1975ac76e82d35';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}$client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }

}

