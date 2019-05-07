ui.js

In the ui.js file :
you are gonna have to handle every ui that you need

for the user informations =>

    <div class="  card card-body mb-3">
      <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary">Repo public: {user.repos}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company:${user.company}</li>
          <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog} </a></li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
      </div>
    </div>

for the user repo =>

 <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars:${repo.stars}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
            <span class="badge badge-success">Forks: ${repo.forks}</span>
          </div>
        </div>
      </div>
