let dane = document.getElementById('dane-programisty');
let btnSumbitGetUser = document.getElementById('btnSumbitGetUser');

const getUser = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {
        method: 'GET',
    })
    .then(res => res.json())
    .then((resJSON) => {
        console.log(resJSON);
        let element = document.createElement('p');
        element.innerHTML = `Imię: ${resJSON.imie}`;
        dane.appendChild(element);
        let element2 = document.createElement('p');
        element2.innerHTML = `Nazwisko: ${resJSON.nazwisko}`;
        dane.appendChild(element2);
        let element3 = document.createElement('p');
        element3.innerHTML = `Zawod: ${resJSON.zawod}`;
        dane.appendChild(element3);
        let element4 = document.createElement('p');
        element4.innerHTML = `Firma: ${resJSON.firma}`;
        dane.appendChild(element4);
    })
    .catch((error) => {
        dane.innerHTML = 'Error check Console', error;
    })
}
btnSumbitGetUser.addEventListener('click', getUser);