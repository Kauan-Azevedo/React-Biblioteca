import { useState } from "react";
import api from "../services/api";
import LivroDTO from "../types/livro";

export default function Search() {
  const [search, setSearch] = useState("");
  const [livro, setLivro] = useState<LivroDTO>();

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const sendData = async () => {
    const { data } = await api.get(`/books/byTitle/${search}`);
    const res = data;

    setLivro(res);
  };

  return (
    <div>
      <section className="barra-pesquisa">
        <input
          type="text"
          className="barra-pesquisa__input"
          onKeyUp={(e) => {
            handleSearch(e);
          }}
        />
        <button className="barra-pesquisa__btn" onClick={sendData}>
          Pesquisar
        </button>
      </section>
      {livro && (
        <section className="livro">
          {livro.image_url != "false" && <img src={livro.image_url} />}
          <div>{livro.title}</div>
          <div>
            {livro.description}
            {livro.qnt_paginas}
            {livro.amount}
          </div>
          <div>
            {livro.bar_code}
          </div>
        </section>
      )}
    </div>
  );
}
