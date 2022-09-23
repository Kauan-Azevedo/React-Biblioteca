import Navbar from "./components/Navbar";
import "./sass/style.sass";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Livros from "./components/Livros";
import Livro from "./components/Livro";

function App() {
  // ROUTER
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/books",
      element: <Livros />,
    },
    {
      path: "/books/:id",
      element: <Livro />,
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
