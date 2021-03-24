"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3245 }
];


// adding the new books using title,author and id of the books
document.getElementById("addBtn").onclick = addBooks;
function addBooks() {

    let newBook = {};
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let libId = document.getElementById("ID").value;
    if (bookTitle === "" || bookAuthor === "" || libId === "") {
        alert("please put values before you add a book")
    }
    else {
        newBook.title = bookTitle;
        newBook.author = bookAuthor
        newBook.id = Number(libId);
        library.push(newBook);
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("ID").value = "";
        alert("This book is added successfully")
    }
}

// sorting title names of the books
document.getElementById("titleBtn").onclick = showTitles;
function showTitles() {

    let title = ""
    
    // let sortResult = library.sort((a, b) => {
    //     let title1 = a.title.toLowerCase(),
    //         title2 = b.title.toLowerCase();
    //     if (title1 > title2) {
    //         return 1;
    //     }
    //     if (title1 < title2) {
    //         return -1;
    //     }
    //     return 0;
    // })
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
    let id = "";
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
        id+=i+1+")"+library[i].ID+"\n";
    }
    document.getElementById("displayArea").value =id ;
}
window.onload = showTitles;
window.onload = addBooks;
window.onload = showAuthors;
window.onload = showIDs;