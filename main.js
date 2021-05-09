const form = document.querySelector('form');
const contenteditable = document.querySelector('[contenteditable]');
let points = 10;
const boldBtn = document.querySelector('.bold-btn');
const italicBtn = document.querySelector('.italic-btn');
const bulletBtn = document.querySelector('.bullet-btn');
const addBtn = document.querySelector('.add-btn');
const pointBtn = document.querySelector('.point-btn');
const oltag = document.querySelector('.formList');
const ulTag = document.querySelector('.formList2')

//FEATURES TO ADD VALUE: BOLD, ITALIC AND BULLET POINT
function addBoldTag(tags){
    document.execCommand('bold');
};

function addItalicTag(tags){
    document.execCommand('italic');
};

// const newLi = ()=> {
//     return document.createElement('li');
// };

function addLiTag(tags) {
    const newLiTag = document.createElement('li');
    ulTag.appendChild(newLiTag)
};

function addOlLiTag(tags) {
    const newLiTag = document.createElement('li');
    oltag.appendChild(newLiTag)  
}


//POST SOME TEXT TO JSON DATA BASE

const createDataText = async (e) => {
    text = contenteditable.innerHTML;
    e.preventDefault();
    
    const content = {
        body: text,
    };

    await fetch('http://localhost:3000/textEdited', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
    });
    text.textContent = ''; 
};

addBtn.addEventListener('click', createDataText);
