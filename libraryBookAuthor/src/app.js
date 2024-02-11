function Library(name, books, address){
    this.name = !name ? "Unnamed" : name;
    this.books = [];
    this.address = address;
    this.numberOfMembers = this.books.length * 15;

    this.printBooks = function(){
        this.books.forEach(b => console.log(b.title));
    }

    this.addBook = function(book){
        let book2 = Object.create(book);
        this.books.push(book2);
    }
}

function Book (title, genre, libraries, authors){
    this.title = !title ? "Unnamed" : title;
    this.genre = genre;
    this.libraries = [];
    this.authors = [];
    
    this.addLibrary = function(library){  
        this.libraries.push(library); //in libraries property of book adds library
        library.books.push (this); //then in property books in library adds this(whole book object)
        
        
    }
    console.log(this);
    

    this.removeLibrary = function (library){
       library.books = library.books.filter(book => book !== this); // with filter checks if the element is not equal with this(whole object book) and then it removes it from the array ??? is this okay?
    }
}

function Author (firstName, lastName, yearOfBirth){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "No last name" : lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    
    this.startBook = function(newBook){ //receives parameter newBook
        this.books.push(newBook); //then the newBook is pushed into the anuthor property
        if(this.currentBook){ //checks if there's new book in current book
            this.books.push(this.currentBook) //in books property we push the newBook 
        }
        return this.currentBook = newBook; //and the current book becomes newBook;
}

}

let library1 = new Library ("MKC", ["Harry Potter"], "Koco Racin");

let book1 = new Book ("The Great Gatsby", "Novel", ["F. Scott Fitzgerald"]);

let author = new Author ("Ana", "Mihajlovska", "2000");

let newBook = new Book ("House of Flame and Shadow", "Fantasy fiction", "Sarah J Maas");

let library2 = new Library ("HTL", [], "123 Street");

let book = {title: "The Great Novel", genre: "Fiction"};




book1.addLibrary(library1)
console.log(library1.books);

book1.removeLibrary(library1)
console.log(library1.books);

author.startBook(newBook);
console.log(author.books);
console.log(author.currentBook);

library2.addBook(book);
console.log(library2.books)


