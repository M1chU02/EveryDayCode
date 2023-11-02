document.getElementById("search").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  if (username) {
    getUserData(username);
  }
});

async function getUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    displayUserProfile(userData);

    const reposResponse = await fetch(userData.repos_url);
    const userRepos = await reposResponse.json();
    displayUserRepos(userRepos);

    const followersResponse = await fetch(userData.followers_url);
    const userFollowers = await followersResponse.json();
    displayUserFollowers(userFollowers);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayUserProfile(user) {
  const profileContainer = document.getElementById("profile-container");
  profileContainer.innerHTML = `
        <img class="avatar" src="${user.avatar_url}" alt="Avatar">
        <h2>${user.login}</h2>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repos: ${user.public_repos}</p>
    `;
}

function displayUserRepos(repos) {
  const reposContainer = document.getElementById("repos-container");
  reposContainer.innerHTML = "";
  repos.slice(0, 10).forEach((repo) => {
    reposContainer.innerHTML += `
            <div class="repo">
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description"}</p>
            </div>
        `;
  });
}

function displayUserFollowers(followers) {
  const followersContainer = document.getElementById("followers-container");
  followersContainer.innerHTML = "";
  followers.slice(0, 10).forEach((follower) => {
    followersContainer.innerHTML += `
            <div>
                <img class="avatar" src="${follower.avatar_url}" alt="Follower">
                <p>${follower.login}</p>
            </div>
        `;
  });
}
