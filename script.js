// This is the old method, promise: and it is asyn request, try to console.log after then and see,

// fetch('https://www.breakingbadapi.com/api/')
// .then (function (res) { console.log(res); return res.json()})
// .then(function(data){ console.log(data)})

// This is the new one:
const api = 'https://www.breakingbadapi.com/api/characters';

async function getData() {
    try {
        const res = await fetch(api)
        const data = await res.json();
        printData(data)

    } catch (e) {
        console.log('Error:', e.message)
        document.write("Server down, Try later")
    }
}

function printData(data) {

    const header = document.querySelector('#header')
    const content = document.querySelector('#content')
    // console.log(header)

    header.innerHTML += `
    <select class="form-select" onchange="getChara(this.value)">
        <option> Please Select </option>
        ${data.map(actor => `<option> ${actor.name}</option>`)}
    </select>`

}

async function getChara(name) {
    if (name !== 'Please Select') {
        const res = await fetch(api + `?name=${name}`);
        const data = await res.json();

        content.innerHTML = `    
    <h1>${data[0].name} (${data[0].nickname})</h1>
    <h5>${data[0].birthday}</h5>
    <img src=${data[0].img} alt="" width='250px'>`
    // this sign is important if you want to delete current item, remove the +
    }
}

getData()

const like = document.querySelector('.qty1')
var lik = 0
const dislike = document.querySelector('.qty2')
var dislik = 0

function myFunction1() {
    lik += 1;
    like.innerHTML = lik
}

function myFunction2() {
    dislik -= 1;
    dislike.innerHTML = dislik
}



































// .then(res => (console.log(res.json()),res.json()))
// .then(data => console.log(data));
// const res = await fetch(`${api}?name=${e}`)
//  document.querySelector('#content h1').innerHTML += "You selected: " + x; 