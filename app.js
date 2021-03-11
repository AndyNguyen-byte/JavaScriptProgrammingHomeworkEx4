let songs = ['Alive', 'Dead', 'Blackbird', 'Friday', 'On the Rocks'];

let paragraph;
//let container = document.getElementById('container');
//let container = document.querySelector('#container');
for (let i = 0; i < songs.length; i++) {
  paragraph = document.createElement('p');
  paragraph.setAttribute('id', `song${i + 1}`);
  paragraph.innerText = songs[i];
  //container.appendChild(paragraph);
  document.querySelector('#container').appendChild(paragraph);
}

songs.forEach((s) => {
  paragraph = document.createElement('p');
  paragraph.setAttribute('id', `song${songs.indexOf(s) + 1}`);
  paragraph.innerText = s;
  //container.appendChild(paragraph);
  document.querySelector('#container').appendChild(paragraph);
});

let ul = document.createElement('ul');
let li;
for (let i = 0; i < songs.length; i++) {
  li = document.createElement('li');
  li.setAttribute('id', `song${i + 1}`);
  li.innerText = songs[i];
  //container.appendChild(paragraph);
  document.querySelector('#container').appendChild(li);