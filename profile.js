////////// profile
const disabledForm = document.querySelector('.disabledForm');
const enabledForm = document.querySelector('.enabledForm');
const modifyButton = document.querySelector('.modifyButton');
const saveButton = document.querySelector('.saveButton');
const checked = document.querySelector('.checked');

const showForm = document.querySelector('.showForm');
const hideForm = document.querySelector('.hideForm');

modifyButton.addEventListener('click', changeFormulary);
saveButton.addEventListener('click', changeButtons);

function changeFormulary(){
    disabledForm.classList.add('hideForm')
    enabledForm.classList.add('showForm')
    modifyButton.classList.add('hideButton')
    saveButton.classList.add('showButton')
}

function changeButtons(){
    saveButton.classList.add('hideButton')
    checked.classList.add('showButton')
    disabledForm.classList.remove('hideForm')
    enabledForm.classList.add('hideForm')
}