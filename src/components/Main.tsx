import { useEffect, useState } from "react";
import api from "../services/api";

export default function Main() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const getInicio = async () => {
    await api.get("/").then((response) => {
      // setData(response.data)
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  };

  useEffect(() => {
    getInicio();
  }, []);

  return (
    <main className="main">
      <section className="home">
        <div className="landing">
          <div className="text">
            <h1 className="home__title">{title ?? "Ocorreu um erro!"}</h1>
            <p className="home__text">
              {body || "Ocorreu um erro ao tentar pegar os valores da API"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
