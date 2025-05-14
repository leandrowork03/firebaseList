import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="bg-purple-950 text-white flex justify-between items-center px-6 py-4 fixed w-full z-10">
      <h1 className="text-xl font-bold">Tasks Easy</h1>

     
      <button
        className={`text-2xl text-white sm:hidden ${styles.btheadr}`}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>

    
      <nav
        className={`${
          menuAberto ? "flex" : "hidden"
        } flex-col absolute top-full left-0 w-full bg-purple-950 sm:static sm:flex sm:flex-row sm:gap-6 sm:w-auto sm:bg-transparent`}
      >
        <Link
          to="/"
          onClick={fecharMenu}
          className="px-4 py-2 block hover:bg-purple-900 sm:hover:bg-transparent"
        >
          Home
        </Link>
        <Link
          to="/tasks"
          onClick={fecharMenu}
          className="px-4 py-2 block hover:bg-purple-900 sm:hover:bg-transparent"
        >
          Tasks
        </Link>
      </nav>
    </header>
  );
}


