import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Livros() {
  const [livros, setLivros] = useState<Array<object>>([]);

  const getLivros = async () => {
    const { data } = await api.get("/books");
    const prod = data;
    setLivros(prod);
  };

  let navigate = useNavigate();
  function routeChange(url: any) {
    let path = `${url}`;
    navigate(path);
  }

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <section className="livros">
      <Outlet />
      <h2 className="livros__title">Todos os livros</h2>
      <div className="cards">
        {livros.map((livro: any) => (
          //@ts-ignore-next-line
          <div className="card" key={livro.id}>
            <h2 className="card__title">{livro.title}</h2>
            <p className="card__description">{livro.description}</p>
            <button
              className="card__btn"
              onClick={() => {
                routeChange(livro.id);
              }}
            >
              <Link to={livro.id}></Link>
              Ver mais!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
