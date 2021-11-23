const body = document.querySelector('body');
body.class = 'body'; // Cria uma classe pra tag body
const header = document.createElement('header');
body.appendChild(header);
const titleText = 'Paleta de Cores';
const title = document.createElement('h1');
title.id = 'title';
title.innerText = titleText;
header.appendChild(title);
const main = document.createElement('main');
body.appendChild(main);
const div0 = document.createElement('div');
main.appendChild(div0);
div0.id = 'color-palette';
const arraycss = ['color black', 'color blue', 'color green', 'color red'];
for (let i = 0; i < arraycss.length; i += 1) { // criando as section's , Ref. Mentoria Joel 22/11/21 as 18:30
  const section = document.createElement('section');
  div0.appendChild(section);
  section[i] = document.getElementsByTagName('section')[i];
  section.className = arraycss[i];
}
const section1 = document.createElement('section');
main.appendChild(section1);
section1.id = 'pixel-board';
for (let i = 0; i < 5; i += 1) { // criando os quadros
  const div1 = document.createElement('div');
  section1.appendChild(div1);
  div1[i] = document.getElementsByTagName('div')[i];
  for (let i1 = 0; i1 < 5; i1 += 1) {
    const button = document.createElement('button');
    div1.appendChild(button);
    button[i1] = document.getElementsByTagName('button')[i1];
    button.className = 'pixel';
  }
}
