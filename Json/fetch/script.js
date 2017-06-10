fetch("./people.json")
    .then(res => res.json())
    .then(data => { addToDocument(data) })
    .catch(err => { showError(err) });

const li = document.querySelector('ul.list');

function addToDocument(data) { 

    let list = data.person;

    li.innerHTML = list.map( person => 
        `<li>${person.firstName}</li>`
    ).join('');
    
 }

function showError(err) {

    if (err !== undefined) {
        li.innerHTML = `<li>Something Went Wrong</li>`
    }
    
}
