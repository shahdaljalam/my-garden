
'use strict';

const form = document.getElementById('myForm');
const clearTable = document.getElementById('clear');
const tablePlace = document.getElementById('mytable');

flower.all = []
flower.all = JSON.parse(localStorage.getItem('myFlower'));

renderTableHead();
renderTableBody();

function flower(name, image, season) {
    this.name = name;
    this.image = image;
    this.season = season

    flower.all.push(this);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.target.UserName.value;
    const image = event.target.flowers.value;
    const season = event.target.userSeason.value;

    new flower(name, image, season);

    localStorage.setItem('myFlower', JSON.stringify(flower.all));
    flower.all = JSON.parse(localStorage.getItem('myFlower'));

    while (tablePlace.hasChildNodes()) {
        tablePlace.removeChild(tablePlace.firstChild);
    }

    renderTableHead();
    renderTableBody();
})

clearTable.addEventListener('click', clearList);
function clearList(event) {
    event.preventDefault();
    flower.all= [];
    
    localStorage.setItem('myFlower', JSON.stringify(flower.all));

    while (tablePlace.hasChildNodes()) {
        tablePlace.removeChild(tablePlace.firstChild);
    }

    renderTableHead();
    renderTableBody();
}

function renderTableHead() {

    const thead = document.createElement('thead');
    thead.setAttribute('class', 'tableHead');
    const trE = document.createElement('tr');
    const col0 = document.createElement('td');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');

    col0.textContent = "#";
    col1.textContent = "image";
    col2.textContent = "name";
    col3.textContent = "season";

    trE.appendChild(col0);
    trE.appendChild(col1);
    trE.appendChild(col2);
    trE.appendChild(col3);
    thead.appendChild(trE);
    tablePlace.appendChild(thead);
}

function renderTableBody() {

    const tbody = document.createElement('tbody');
    for (let i = 0; i < flower.all.length; i++) {
        const trE = document.createElement('tr');
        const col1 = document.createElement('td');
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const col4 = document.createElement('td');

        const remove = document.createElement('button');
        remove.textContent = "x";
        remove.setAttribute('class', 'removeButton')
        remove.setAttribute('id', flower.all[i].name)
        remove.addEventListener('click', removeFlower);
        col1.appendChild(remove);

        var img = document.createElement("img");
        img.src = "/images/" + flower.all[i].image + ".jpeg";
        col2.appendChild(img);

        col3.textContent = flower.all[i].name;
        col4.textContent = flower.all[i].season;

        trE.appendChild(col1);
        trE.appendChild(col2);
        trE.appendChild(col3);
        trE.appendChild(col4);

        tbody.appendChild(trE);
        tablePlace.appendChild(tbody);
    }
}

function removeFlower(event) {

    event.preventDefault();

    let id = event.target.id;
    for (let i = 0; i < flower.all.length; i++) {
        if (id == flower.all[i].name) {
            flower.all.splice(i, 1);
        }
    }

    localStorage.setItem('myFlower', JSON.stringify(flower.all));
    flower.all = JSON.parse(localStorage.getItem('myFlower'));
    console.log(localStorage.getItem("myFlower"))

    while (tablePlace.hasChildNodes()) {
        tablePlace.removeChild(tablePlace.firstChild);
    }

    renderTableHead();
    renderTableBody();
}