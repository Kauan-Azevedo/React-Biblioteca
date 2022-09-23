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
          <li>
            <button>Pesquisar Livro</button>
          </li>
          <div className="divisor">
            <span>|</span>
          </div>
          <li>
            <button>Excluir Livro</button>
          </li>
          <div className="divisor">
            <span>|</span>
          </div>
          <li>
            <button>Adicionar Livro</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
