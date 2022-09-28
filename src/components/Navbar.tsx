export default function Navbar() {
  return (
    <header className="header">
      <h2 className="header__logo">Biblioteca</h2>
      <div></div>
      <nav>
        <ul className="header__nav">
          <li>
            <a href="/">Home</a>
          </li>
          <div className="divisor">
            <span>|</span>
          </div>
          <li className="livros">
            <a href="/books">Livros</a>
          </li>
          <div className="divisor">
            <span>|</span>
          </div>
          <li className="pesquisar">
            <a href="/books/search">Pesquisar Livro</a>
          </li>
          <div className="divisor">
            <span>|</span>
          </div>
          <li>
            <a>Excluir Livro</a>
          </li>
          <div className="divisor">
            <span>|</span>
          </div>
          <li>
            <a href="/books/add/">Adicionar Livro</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
