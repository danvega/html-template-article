
fetch('users.json') 
.then((response) => {
  return response.json();
})
.then((users) => {
  if('content' in document.createElement('template')) {
    const container = document.getElementById('users');
    users.forEach((user) => {
      const tmpl = document.getElementById('user-card-template').content.cloneNode(true);
      tmpl.querySelector('h2').innerText = user.fullname;
      tmpl.querySelector('.title').innerText = user.title;
      tmpl.querySelector('img').setAttribute("src",user.avatar);
      tmpl.querySelector('.posts h3').innerText = user.stats.posts;
      tmpl.querySelector('.likes h3').innerText = user.stats.likes;
      tmpl.querySelector('.followers h3').innerText = user.stats.followers;
      container.appendChild(tmpl);
    });
  } else {
    console.error('Your browser does not support templates');
  }
})
.catch((err) => console.error(err));