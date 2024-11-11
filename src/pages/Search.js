import React, { useState, useEffect } from "react";
import { fetchBooks } from "../api"; // Função que busca os livros na API
import BookCard from "../components/BookCard"; // Componente para exibir cada livro

const Search = () => {
  const [query, setQuery] = useState(""); // Armazena o texto de pesquisa
  const [books, setBooks] = useState([]); // Armazena os livros recebidos da API

  // Função para carregar livros do localStorage ou da API
  const loadBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
      setBooks(storedBooks);
    } else {
      fetchBooks().then((data) => {
        setBooks(data || []); // Carregar da API se não houver no localStorage
        localStorage.setItem("books", JSON.stringify(data)); // Salvar no localStorage
      });
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // Função para atualizar a estante e salvar no localStorage
  const updateShelf = (bookId, newShelf) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, shelf: newShelf } : book
    );
    setBooks(updatedBooks); // Atualiza o estado local

    // Persiste a mudança no localStorage
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  // Função para filtrar os livros de acordo com a consulta
  const filteredBooks = books.filter(
    (book) =>
      book.title && book.title.toLowerCase().includes(query.toLowerCase())
  );

  // Função que captura a digitação no campo de pesquisa
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pesquisar livros..."
        value={query}
        onChange={handleSearch} // Atualiza o estado com o valor digitado
      />
      <div className="book-list-container">
        {filteredBooks.length > 0 ? (
          <div className="book-grid">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                updateShelf={updateShelf} // Passando a função updateShelf como prop
              />
            ))}
          </div>
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
