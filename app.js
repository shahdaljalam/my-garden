

const form = document.getElementById('myForm');
const tablePlace = document.getElementById('mytable');
const table = document.createElement('table');


imgArray = [
    'Alstroemerias.jpeg',
    'Gardenias.jpeg',
    'Orchids.jpeg',
    'Peonies.jpeg',
    'Roses.jpeg',
    'Sunflowers.jpeg',
    'Tulips.jpeg'
];
console.log(imgArray);
function flower(name, image, season) {
    this.name = name;
    this.image = imgArray[i];
    this.season = season
    flower.all.push(this);
}

flower.all = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.target.UserName.value;
    const image = event.target.userImage.value;
    const season = event.target.userSeason.value;
    new flower(name, image, season);
    localStorage.setItem('myFlower', JSON.stringify(flower.all));

})
console.log(flower.all);
function renderTableHead() {
    const thead = document.createElement('thead');
    const trE = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');


    col1.textContent = "image";
    col2.textContent = "name";
    col3.textContent = "season";

    col1.appendChild(remove);
    trE.appendChild(col1);
    trE.appendChild(col2);
    trE.appendChild(col3);
    thead.appendChild(trE);
    table.appendChild(thead);

}

const tbody = document.createElement('tbody');
function renderTableBody() {
    renderTableBody.innerHTML = '';
    for (let i = 0; i < flower.all.length; i++) {
        const trE = document.createElement('tr');
        const col1 = document.createElement('td');
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const remove = document.createElement('button');

        col1.textContent = Event.target.userImage.value;
        col2.textContent = Event.target.userImage.value;
        col3.textContent = Event.target.userImage.value;
        remove.textContent = "x";


        col1.appendChild(remove);
        trE.appendChild(col1);
        trE.appendChild(col2);
        trE.appendChild(col3);
        tbody.appendChild(trE);
        table.appendChild(tbody);

        remove.setAttribute('id', flower.all[i].nam)
        remove.addEventListener('click', removeFun);
        function removeFun(event) {
            event.preventDefault();
            let id = event.target.id;
            for (let i = 0; i < flower.all.length; i++) {
                if (id == flower.all[i].name) {
                    flower.all.splice(i, 1);
                }
            }
           
        
        localStorage.setItem('myFlower'.JSON.stringify(flower.all));
        table.parentNode.removeChild(table);
        renderTableHead();
        renderTableBody();
    }
}

}

