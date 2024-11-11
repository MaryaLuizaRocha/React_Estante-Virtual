import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard"; // Componente para exibir cada livro

const Home = () => {
  const [books, setBooks] = useState([]); // Armazena todos os livros

  // Função para carregar os livros do localStorage
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  // Função para atualizar a estante de um livro
  const updateShelf = (bookId, newShelf) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, shelf: newShelf } : book
    );
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks)); // Persiste no localStorage
  };

  // Filtra os livros por estante
  const filterBooksByShelf = (shelf) => {
    if (shelf === "Todos") return books; // Retorna todos os livros
    return books.filter((book) => book.shelf === shelf); // Filtra por estante específica
  };

  // Filtra os livros para cada categoria
  const allBooks = filterBooksByShelf("Todos");
  const readingBooks = filterBooksByShelf("Estou lendo");
  const wantToReadBooks = filterBooksByShelf("Quero ler");
  const readBooks = filterBooksByShelf("Já li");

  return (
    <div className="home">
      {/* Estante Estou Lendo */}
      <h2>Estou Lendo</h2>
      <div className="book-list">
        {readingBooks.length > 0 ? (
          readingBooks.map((book) => (
            <BookCard key={book.id} book={book} updateShelf={updateShelf} />
          ))
        ) : (
          <p>Nenhum livro encontrado na estante "Estou Lendo".</p>
        )}
      </div>

      {/* Estante Quero Ler */}
      <h2>Leituras Futuras</h2>
      <div className="book-list">
        {wantToReadBooks.length > 0 ? (
          wantToReadBooks.map((book) => (
            <BookCard key={book.id} book={book} updateShelf={updateShelf} />
          ))
        ) : (
          <p>Nenhum livro encontrado na estante "Quero Ler".</p>
        )}
      </div>

      {/* Estante Já Li */}
      <h2>Leituras Passadas</h2>
      <div className="book-list">
        {readBooks.length > 0 ? (
          readBooks.map((book) => (
            <BookCard key={book.id} book={book} updateShelf={updateShelf} />
          ))
        ) : (
          <p>Nenhum livro encontrado na estante "Já Li".</p>
        )}
      </div>
    </div>
  );
};

export default Home;
