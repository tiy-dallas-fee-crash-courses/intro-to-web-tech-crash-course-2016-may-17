var orgList = document.querySelector('#org-list');
var input = document.querySelector('#name-input');


function keyUpHappened(evt) {
  if (evt.keyCode === 13) {
    loadData(input.value);
  }
}


function loadData(name) {
  console.log(name);
  $.ajax('https://api.github.com/users/' + name + '/orgs')
    .done(function(data) {
      console.log('data', data);
      orgList.innerHTML = '';

      for (var org of data) {
        var li = document.createElement('li');

        var img = document.createElement('img');
        img.src = org.avatar_url;
        li.appendChild(img);

        var span = document.createElement('span');
        span.textContent = org.login;
        li.appendChild(span);

        orgList.appendChild(li);
        console.log('adding', li);
      }
    });
}

input.addEventListener('keyup', keyUpHappened);




console.log(orgList);
