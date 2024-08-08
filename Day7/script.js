//Activity 
// Task 1
let books={
    title:"cti",
    author:"ddkdl",
    year:"2020"
  }
  console.log(books)
  
//Task 2
console.log(book.title)

console.log(book.author)


// Activity 2 
// Task 3
let book={
    title:"cti",
    author:"ddkdl",
    year:"2020"
  }
console.log(Object.values(book.title))
console.log(Object.values(book.author))

// Task 4
book.year="2021"
console.log(book.year)



// Activity 4
// Task 5
let library = {
    name: "City Library",
    books: [
        {
            title: "Book One",
            author: "Author One",
            year: "2020"
        },
        {
            title: "Book Two",
            author: "Author Two",
            year: "2021"
        },
        {
            title: "Book Three",
            author: "Author Three",
            year: "2022"
        }
    ]
};

console.log(library);


// Task 6
console.log(library.books.name)
console.log(library.books.title)

// Task 7
let Book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    getBookInfo: function() {
      book=this.title;
  
       return book;
        
    }
};
console.log(Book.getBookInfo());

// Tak 8
let Book = {
    title: "To Kill a Mockingbird",
    year: 1960
   
}
for (var keys in Book){
  console.log(keys)
}

// Task 9
let Book = {
    title: "To Kill a Mockingbird",
    year: 1960
   
}
console.log(Object.keys(Book))
console.log(Object.values(Book))
