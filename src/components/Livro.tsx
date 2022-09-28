import { useEffect, useState } from "react";
import api from "../services/api";
import LivroDTO from "../types/livro";

export default function Livro() {
  let getUrl = window.location.href.slice(28);
  const [livro, setLivro] = useState<LivroDTO>();

  const getLivro = async (url: any) => {
    const { data } = await api.get(`/books/${url}`);
    const prod = data;
    setLivro(prod);
  };

  useEffect(() => {
    getLivro(getUrl); // PROCURAR JEITO DE MELHORAR DEPOIS
  }, []);
  return (
    <div className="modal__item">
      {livro && (
        <div className="livro">
          <h2 className="livro__title">
            <span className="livro__head">Titulo:</span> {livro?.title}
          </h2>
          <p className="livro__body">
            <span className="livro__head">Descrição: </span>
            {livro?.description}
          </p>
          <p>
            <span className="livro__head">Quantidade de paginas: </span>
            {livro?.qnt_paginas}
          </p>
          <p>
            <span className="livro__head">Quantidade disponiveis: </span>{" "}
            {livro?.amount}
          </p>
          <p>
            <span className="livro__head">Codigo de barras: </span>{" "}
            {livro?.bar_code}
          </p>
        </div>
      )}
    </div>
  );
}
