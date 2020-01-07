# Lastni projekt pri predmetu TPO

Razvit lastni projekt (LP) na problemski domeni sega od **predloga projekta** do **implementacije**, z naslednjo razdelitvijo:

* **1. LP** - [Predlog projekta](docs/predlog-projekta),
* **2. LP** - [Zajem zahtev](docs/zajem-zahtev),
* **3. LP** - [Načrt rešitve](docs/nacrt) in
* **4. LP** - [Implementacija](src).

Navodilo za uporabo aplikacije:

* predpogoj: lokalno naložen node.js (https://nodejs.org/en/download/) in Git Bash (https://git-scm.com/downloads)
* prestavimo se v poljubno mapo (predlagamo, da je prazna), kamor bomo pridobili projekt,
* znotraj mape po kliku na desni gumb miške izberemo izbiro **Git Bash Here**,
* nastavimo git z **git init** ukazom,
* v konzolo nato napišemo: ** git remote add origin git@bitbucket.org:mz9337/tpo-lp4.git** in takoj za tem še **git pull origin master**
* premaknemo se v mapo src z ukazom: **cd src**
* pred prvim zagonom je potrebno pridobiti vse odvisnosti, ki so dodane v projektu z ukazom v konzoli: **npm install**
* nato lokalno zaženemo aplikacijo z ukazom: **npm start** in v brskalniku odpremo naslov: **http://localhost:5000/**, kjer je aplikacija dostopna.