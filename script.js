const author = document.getElementsByClassName('author');
console.log(author);
const authorArray = ["Author4", "Author5", "Author6"]
for(let i = 0; i<author.length; i++){
    let element = author[i];
    element.style.backgroundColor ="red"; 
    element.style.margin="20px 10px";
    element.innerHTML = `Lekhok ${i}`
}