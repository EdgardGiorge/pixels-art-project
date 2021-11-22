const body = document.querySelector('body');
body.class = 'body'; // Cria uma classe pra tag body
const titleText = 'Paleta de Cores';
const title = document.createElement('h1');
title.id = 'title';
title.innerText = titleText;
body.appendChild(title);
