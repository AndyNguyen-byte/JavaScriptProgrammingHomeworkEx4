let songTitles = ["Alive","Dead","Blackbird","Friday"];

let i = 0;
arr.map(n => {
  n['id'] ="song"+ i;
  i++;
});

let div = document.getElementById("container");
div.appendChild(songTitles);
let newUl = document.createElement('ul');
songTitles.forEach(element => {document.createElement('li')
});

newUl.appendChild(songTitles);
div.appendChild(newUl);
