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
    <>
      {livro && (
        <div className="livro">
          <h2 className="livro__title">{livro?.title}</h2>
          <p className="livro__body">{livro?.description}</p>
          <p>Quantidade de paginas: {livro?.qnt_paginas}</p>
          <p>Quantidade disponiveis: {livro?.amount}</p>
          <p>Codigo de barras: {livro?.bar_code}</p>
        </div>
      )}
    </>
  );
}
