// forcefull type assertion

let response: any = "42";
let answer: number = (response as string).length

type Book = {
    name: string;
}

let bookString = '{"name": "TypeScript Handbook"}';
// we need to manually say that the parsed object is of type Book
// because JSON.parse returns 'any' type
let book = JSON.parse(bookString) as Book;
// without assersion there would be no suggessions for book.name
console.log(book);

// another example
const input = document.getElementById("username") as HTMLInputElement;