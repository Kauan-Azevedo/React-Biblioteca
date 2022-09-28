export default function AddBook() {
  return (
    <section>
      <h2>Adicionar livro</h2>
      <form className="add_livro">
        <label htmlFor="image">Imagem:</label>
        <input type="file" />
        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" />
        <label htmlFor="description">Descrição:</label>
        <input type="text" name="description" />
        <label htmlFor="bar_code">Codigo de barras:</label>
        <input type="text" name="bar_code" />
        <label htmlFor="amount">Quantidade disponivel:</label>
        <input type="text" name="amount" />
        <label htmlFor="qnt_paginas">Quantidade de paginas:</label>
        <input type="text" name="qnt_paginas" />
        <button className="add_livro__btn">Enviar</button>
      </form>
    </section>
  );
}
