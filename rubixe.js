let aboutElement = document.getElementById('aboutButton');
let timeToVisitElement = document.getElementById('timeToVisitButton');
let attractionsElement = document.getElementById('attractionsButton');
let attractionsElement_1 = document.getElementById('attractionsButton_1');
let attractionsElement_2 = document.getElementById('attractionsButton_2');

let aboutTabElement = document.getElementById('aboutTab');
let timeToVisitTabElement = document.getElementById('timeToVisitTab');
let attractionsTabElement = document.getElementById('attractionsTab');
let attractionsTabElement_1 = document.getElementById('attractionsTab_1');
let attractionsTabElement_2 = document.getElementById('attractionsTab_2');

timeToVisitTabElement.classList.add('d-none');
attractionsTabElement.classList.add('d-none');
attractionsTabElement_1.classList.add('d-none');
attractionsTabElement_2.classList.add('d-none');


function About() {
    aboutTabElement.classList.remove('d-none');
    timeToVisitTabElement.classList.add('d-none');
    attractionsTabElement.classList.add('d-none');
    attractionsTabElement_1.classList.add('d-none');
    attractionsTabElement_2.classList.add('d-none');

    aboutTabElement.classList.add('selected-button');
    timeToVisitTabElement.classList.remove('selected-button');
    attractionsTabElement.classList.remove('selected-button');
    attractionsTabElement_1.classList.remove('selected-button');
    attractionsTabElement_2.classList.remove('selected-button');

    timeToVisitElement.style.backgroundColor = '#187fd9';
    attractionsElement.style.backgroundColor = '#187fd9';
    attractionsElement_1.style.backgroundColor = '#187fd9';
    attractionsElement_2.style.backgroundColor = '#187fd9';
    aboutElement.style.backgroundColor = 'white';

    aboutElement.style.color = 'black';
    timeToVisitElement.style.color = 'white';
    attractionsElement.style.color = 'white';
    attractionsElement_1.style.color = 'white';
    attractionsElement_2.style.color = 'white';
}

function visiting() {
    aboutTabElement.classList.add('d-none');
    timeToVisitTabElement.classList.remove('d-none');
    attractionsTabElement.classList.add('d-none');
    attractionsTabElement_1.classList.add('d-none');
    attractionsTabElement_2.classList.add('d-none');

    aboutTabElement.classList.remove('selected-button');
    timeToVisitTabElement.classList.add('selected-button');
    attractionsTabElement.classList.remove('selected-button');
    attractionsTabElement_1.classList.remove('selected-button');
    attractionsTabElement_2.classList.remove('selected-button');

    timeToVisitElement.style.backgroundColor = 'white';
    attractionsElement.style.backgroundColor = '#187fd9';
    aboutElement.style.backgroundColor = '#187fd9';
    attractionsElement_1.style.backgroundColor = '#187fd9';
    attractionsElement_2.style.backgroundColor = '#187fd9';

    aboutElement.style.color = 'white';
    timeToVisitElement.style.color = 'black';
    attractionsElement.style.color = 'white';
    attractionsElement_1.style.color = 'white';
    attractionsElement_2.style.color = 'white';

}

function Attractions() {
    aboutTabElement.classList.add('d-none');
    timeToVisitTabElement.classList.add('d-none');
    attractionsTabElement.classList.remove('d-none');
    attractionsTabElement_1.classList.add('d-none');
    attractionsTabElement_2.classList.add('d-none');

    aboutTabElement.classList.remove('selected-button');
    timeToVisitTabElement.classList.remove('selected-button');
    attractionsTabElement.classList.add('selected-button');
    attractionsTabElement_1.classList.remove('selected-button');
    attractionsTabElement_2.classList.remove('selected-button');

    timeToVisitElement.style.backgroundColor = '#187fd9';
    attractionsElement.style.backgroundColor = 'white';
    aboutElement.style.backgroundColor = '#187fd9';
    attractionsElement_1.style.backgroundColor = '#187fd9';
    attractionsElement_2.style.backgroundColor = '#187fd9';

    aboutElement.style.color = 'white';
    timeToVisitElement.style.color = 'white';
    attractionsElement.style.color = 'black';
    attractionsElement_1.style.color = 'white';
    attractionsElement_2.style.color = 'white';
}

function Attractions_1() {
    aboutTabElement.classList.add('d-none');
    timeToVisitTabElement.classList.add('d-none');
    attractionsTabElement.classList.add('d-none');
    attractionsTabElement_1.classList.remove('d-none');
    attractionsTabElement_2.classList.add('d-none');

    aboutTabElement.classList.remove('selected-button');
    timeToVisitTabElement.classList.remove('selected-button');
    attractionsTabElement.classList.remove('selected-button');
    attractionsTabElement_1.classList.add('selected-button');
    attractionsTabElement_2.classList.remove('selected-button');

    timeToVisitElement.style.backgroundColor = '#187fd9';
    attractionsElement.style.backgroundColor = '#187fd9';
    aboutElement.style.backgroundColor = '#187fd9';
    attractionsElement_1.style.backgroundColor = 'white';
    attractionsElement_2.style.backgroundColor = '#187fd9';


    aboutElement.style.color = 'white';
    timeToVisitElement.style.color = 'white';
    attractionsElement.style.color = 'white';
    attractionsElement_1.style.color = 'black';
    attractionsElement_2.style.color = 'white';
}

function Attractions_2() {
    aboutTabElement.classList.add('d-none');
    timeToVisitTabElement.classList.add('d-none');
    attractionsTabElement.classList.add('d-none');
    attractionsTabElement_1.classList.add('d-none');
    attractionsTabElement_2.classList.remove('d-none');

    aboutTabElement.classList.remove('selected-button');
    timeToVisitTabElement.classList.remove('selected-button');
    attractionsTabElement.classList.remove('selected-button');
    attractionsTabElement_1.classList.remove('selected-button');
    attractionsTabElement_2.classList.add('selected-button');

    timeToVisitElement.style.backgroundColor = '#187fd9';
    attractionsElement.style.backgroundColor = '#187fd9';
    aboutElement.style.backgroundColor = '#187fd9';
    attractionsElement_1.style.backgroundColor = '#187fd9';
    attractionsElement_2.style.backgroundColor = 'white';

    aboutElement.style.color = 'white';
    timeToVisitElement.style.color = 'white';
    attractionsElement.style.color = 'white';
    attractionsElement_1.style.color = 'white';
    attractionsElement_2.style.color = 'black';
}

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

let emailErrorMsggEl = document.getElementById('emailErrorMsg');
let nameErrorMsgEl = document.getElementById('nameErrorMsg');


let WorkingStatusEl = document.getElementById('status');
WorkingStatusEl.addEventListener('change', function(event) {
    formData.status = event.target.value;
    console.log(formData);
})

let genderMale = document.getElementById('male');
genderMale.addEventListener('change', function(event) {
    formData.gender = event.target.value;
});


let genderFemale = document.getElementById('female');
genderFemale.addEventListener('change', function(event) {
    formData.gender = event.target.value;
});

let genderTrans = document.getElementById('Transgender');
genderTrans.addEventListener('change', function(event) {
    formData.gender = event.target.value;
});




let nameEl = document.getElementById('name');
nameEl.addEventListener('change', function(event) {
    if (event.target.value === '') {
        nameErrorMsgEl.textContent = 'Required*';
    } else {
        nameErrorMsgEl.textContent = '';
    }
    formData.name = event.target.value;
});


let emailEl = document.getElementById('email');
emailEl.addEventListener('change', function(event) {
    if (event.target.value === '') {
        emailErrorMsggEl.textContent = 'Required*';
    } else {
        emailErrorMsggEl.textContent = '';
    }
    formData.email = event.target.value;
});

function validateFormData(formData) {

    let {
        name,
        email
    } = formData;
    if (name === '') {
        nameErrorMsgEl.textContent = 'Required*';
    }
    if (email === '') {
        emailErrorMsggEl.textContent = 'Required*';
    }

}

function submitformData(formData) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer 1f904387f96fea832db1718fdf6e1a0e667a174ef03da4689aeedaf1b034bde7'

        },
        body: JSON.stringify(formData)
    };
    let url = 'https://gorest.co.in/public-api/users';

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === 'has already been taken') {
                    emailErrorMsggEl.textContent = 'Email Already Exists';
                }
            }
        });
}

let myFormEl = document.getElementById('myForm');
myFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitformData(formData);
});