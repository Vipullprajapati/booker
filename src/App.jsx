import { useState } from "react";
import Form from "./Form";

function App() {
  const [books, setBooks] = useState([
    "The Great Gatsby",
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
  ]);

  const updateBooks = (book) => {
    setBooks([book, ...books]);
  };

  const deleteBook = (book) => {
    setBooks(books.filter((b) => b !== book));
  };

  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>

      <Form onSubmit={updateBooks} />

      {books.map((book) => (
        <pre key={book}>
          {book}
          <button onClick={() => deleteBook(book)}>Delete</button>
        </pre>
      ))}
    </>
  );
}

export default App;
