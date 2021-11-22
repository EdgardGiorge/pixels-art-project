const body = document.querySelector('body');
body.class = 'body'; // Cria uma classe pra tag body
const titleText = 'Paleta de Cores';
const title = document.createElement('h1');
title.id = 'title';
title.innerText = titleText;
body.appendChild(title);
const main = document.createElement('main');
body.appendChild(main);
const div0 = document.createElement('div');
main.appendChild(div0);
div0.id = 'color-palette';
const arraycss = ['color black', 'color blue', 'color green', 'color red'];
for (let i = 0; i < arraycss.length; i += 1) { // criando as section's , Ref. Mentoria Joel 22/11 as 18:30
  const section = document.createElement('section');
  div0.appendChild(section);
  section[i] = document.getElementsByTagName('section')[i];
  section.className = arraycss[i];
}
