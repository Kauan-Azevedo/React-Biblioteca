import Navbar from "./components/Navbar";
import "./sass/style.sass";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Livros from "./components/Livros";
import Livro from "./components/Livro";
import Search from "./components/Search";
import AddBook from "./components/AddBook";

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
      children: [
        {
          path: "/books/byId/:id",
          element: <Livro />,
        },
      ],
    },
    {
      path: "/books/search/",
      element: <Search />,
    },
    {
      path: "/books/add/",
      element: <AddBook />,
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
