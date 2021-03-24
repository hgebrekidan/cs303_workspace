"use strict";

let library = [
    { title: "Mockingjay: The Road Ahead", author: "Bill Gates", ID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4264 },
    { title: "The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3245 }
];


// adding the new books using title,author and id of the books
document.getElementById("addBtn").onclick = addBooks;
function addBooks() {

    let newBook = {};
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let libId = document.getElementById("ID").value;
    if (bookTitle === "" || bookAuthor === "" || libId === "") {
        alert("Enter your book's title, author and id")
    }
    else {
        newBook.title = bookTitle;
        newBook.author = bookAuthor
        newBook.ID = Number(libId);
        library.push(newBook);
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("ID").value = "";
        alert("Your book is added to the library");
    }
}

// sorting title names of the books
document.getElementById("titleBtn").onclick = showTitles;
function showTitles() {

    let title = ""
    
    let sortResult = library.sort((a, b) => {
        
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        return 0;
    })
    for (let i = 0; i < sortResult.length; i++) {
        title += i + 1 + ") " + (sortResult[i].title + "\n")
    }
    document.getElementById("displayArea").value = title;
}

// sorting the author names of the book
document.getElementById("authorsBtn").onclick = showAuthors;
function showAuthors() {
    
     let author="";
     let sortAuthor=library.sort((a,b)=>{
         let author1=a.author.toLowerCase();
         let author2=b.author.toLowerCase();
         if(author1>author2){
             return 1;
         }else if(author1<author2){
             return -1
         }
         return 0;
     })
     for(let i=0;i<sortAuthor.length;i++){
        author += i + 1 + ") " + (sortAuthor[i].author + "\n")
     }
    document.getElementById("displayArea").value = author;
}
document.getElementById("IDsBtn").onclick = showIDs;
document.getElementById("IDsBtn").onclick = showIDs;
// sorting ids of the books added
function showIDs() {
    let ID = "";
    let sortResult = library.sort((a, b) => {
        if(a.ID>b.ID){
            return 1;
        }else if(a.ID<b.ID){
            return -1;
        }else{
            return 0;
        }
    });
    
    for(let i=0;i<sortResult.length;i++){
        ID+=i+1+")"+sortResult[i].ID+"\n";
    }
    
    document.getElementById("displayArea").value =ID ;
}
window.onload = showTitles;
window.onload = addBooks;
window.onload = showAuthors;
window.onload = showIDs;


module.exports={
    addBooks,showAuthors,showTitles,showIDs
}