
class LibraryItem {
    constructor(title, id, isAvailable=true){
        this.title= title;
        this.id= id;
        this.isAvailable= isAvailable;
    }
    checkOut(){
        if(this.isAvailable) {
            this.isAvailable= false;
            return `${this.title} book is checked out\n`;
        } 
        return `${this.title} is not available in the library at the moment\n`;
    }
    
    returnItem() {
        if(!this.isAvailable) {
        this.isAvailable= true;
        return `${this.title} is successfully returned!\n`;
        }
        return `${this.title} was never checked out!\n`;
    }
    
}

class Book extends LibraryItem {
constructor(title, id, author, genre, isAvailable) {
    super(title, id, isAvailable); 
    this.author = author;
    this.genre = genre;
    this.edition = null;
}

getBookDetails() {
    return `${this.title} Book Details\n\tTitle: ${this.title}\n\tBook Id: ${this.id}\n\tBook Author: ${this.author}\n\tGenre: ${this.genre}\n\tAvailable: ${this.isAvailable}\n`;
}
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration, isAvailable) {
        super(title, id, isAvailable);
        this.director= director;
        this.duration= duration;
        this.language= null;
    }

getDVDDetails() {
    return `${this.title} DVD Details\n\tTitle: ${this.title}\n\tDVD Id: ${this.id}\n\tDirector: ${this.director}\n\tDuration: ${this.duration}\n\tAvailable: ${this.isAvailable}\n`;
}
}

class Magazine extends LibraryItem{
    constructor(title, id, issueNumber, publisher, isAvailable){
        super(title, id, isAvailable);
        this.issueNumber= issueNumber;
        this.publisher= publisher;
        this.genre= null;
    }

getMagazineDetails() {
    return `${this.title} Magazine Details\n\tTitle: ${this.title}\n\tId: ${this.id}\n\tIssue Number: ${this.issueNumber}\n\tPublisher: ${this.publisher}\n\tAvailable: ${this.isAvailable}\n`;
}
}

//Child Class Object& its methods
let Book1= new Book("Harry Potter", "BKHP1234", "J.K.Rowling", "Fiction");
let Book2= new Book("David Copperfield","BKDC3458", "Charles Dickens", "Fiction", false);
let Book3= new Book("Men are from Mars& Women are from Venus", "BKMMWV23", "John Gray");
console.log(Book1.getBookDetails());
console.log(Book2.getBookDetails());
console.log(Book3.getBookDetails());
console.log(Book1.checkOut());
console.log(Book2.checkOut());
console.log(Book3.checkOut());
Book1.isAvailable= true;
console.log(Book1.returnItem());
console.log(Book2.returnItem());
console.log(Book3.returnItem());
console.log(Book1.getBookDetails());
console.log(Book2.getBookDetails());
console.log(Book3.getBookDetails());

//Child Class DVD & its methods
let Dvd1= new DVD("The Lord of the Rings: The Fellowship of the Ring", "DVD467", "Peter Jackson",178);
let Dvd2= new DVD("Pirates of the Caribbean: The Curse of the Black Pearl", "DVD378", "Gore Verbinski", 143);

console.log(Dvd1.getDVDDetails());
console.log(Dvd2.getDVDDetails());
console.log(Dvd1.checkOut());
console.log(Dvd2.checkOut());
console.log(Dvd1.getDVDDetails());
console.log(Dvd2.getDVDDetails());
console.log(Dvd1.returnItem());
console.log(Dvd2.returnItem());
console.log(Dvd1.getDVDDetails());
console.log(Dvd2.getDVDDetails());

//Child class Magazine& its methods
let Mag1= new Magazine("Better Homes and Gardens Magazine", "MG234",1,"Dotdash Meredith");
let Mag2= new Magazine("Women's Era", "MGWE678", 4, "Vishwanath- Delhi Press");

console.log(Mag1.getMagazineDetails());
console.log(Mag2.getMagazineDetails());
console.log(Mag1.checkOut());
console.log(Mag2.checkOut());
console.log(Mag1.getMagazineDetails());
console.log(Mag2.getMagazineDetails());
console.log(Mag1.returnItem());
console.log(Mag2.returnItem());
console.log(Mag1.getMagazineDetails());
console.log(Mag2.getMagazineDetails());