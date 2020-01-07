# Zagon aplikacije

* predpogoj: lokalno naložen node.js (https://nodejs.org/en/download/) in Git Bash (https://git-scm.com/downloads)
* prestavimo se v poljubno mapo (predlagamo, da je prazna), kamor bomo pridobili projekt,
* znotraj mape po kliku na desni gumb miške izberemo izbiro **Git Bash Here**,
* nastavimo git z **git init** ukazom,
* v konzolo nato napišemo: ** git remote add origin git@github.com:sziva/frontend.git** in takoj za tem še **git pull origin master**
* premaknemo se v mapo src z ukazom: **cd src**
* pred prvim zagonom je potrebno pridobiti vse odvisnosti, ki so dodane v projektu z ukazom v konzoli: **npm install**
* nato lokalno zaženemo aplikacijo z ukazom: **npm start** in v brskalniku odpremo naslov: **http://localhost:5000/**, kjer je aplikacija dostopna.