import React, { useState } from "react";

const BookCard = ({ book, updateShelf }) => {
  const [shelf, setShelf] = useState(book.shelf || ""); // Começa vazio para ser alterado pelo usuário
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // Controla a visibilidade do card de descrição

  const handleShelfChange = (e) => {
    setShelf(e.target.value);
    updateShelf(book.id, e.target.value); // Atualiza a estante com a função passada como prop
  };

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible); // Alterna a visibilidade da descrição
  };

  return (
    <div className="book-card">
      {/* Verifica se a imagem existe e exibe a capa do livro */}
      {book.imageLinks && book.imageLinks.thumbnail && (
        <img
          src={book.imageLinks.thumbnail}
          alt={book.title}
          className="book-cover"
        />
      )}

      <h3>{book.title}</h3>
      <select value={shelf} onChange={handleShelfChange}>
        <option value="">Selecione uma estante</option>
        <option value="Estou lendo">Estou lendo</option>
        <option value="Quero ler">Quero ler</option>
        <option value="Já li">Já li</option>
      </select>

      {/* Botão de descrição */}
      <button className="description-toggle" onClick={toggleDescription}>
        Ver Descrição
      </button>

      {/* Card de descrição */}
      {isDescriptionVisible && (
        <div className="description-card open">
          <span className="close-btn" onClick={toggleDescription}>
            ×
          </span>
          <div className="description-content">
            <h3>Descrição do Livro</h3>
            <p>{book.description || "Sem descrição disponível."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
