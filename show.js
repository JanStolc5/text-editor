// GET POSTS FROM JSON
const textContent = document.querySelector('.textContent');

const getPosts = async () => {

    let url = `http://localhost:3000/textEdited/`;
    const res = await fetch(url);
    const textEdited = await res.json();
    let template = ''; 
    textEdited.forEach(el => {
        template += `
        <div class ="box">
            <p>${el.body}</p>
        </div>
        `
    });
    textContent.innerHTML = template;
};
getPosts()