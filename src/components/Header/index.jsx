import "./style.css"

export default function Header() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <h1>Portfólio Mobile</h1>
          <ul className="list">
            <li className="item"><a href="#bio">Bio</a></li>
            <li className="item"><a href="#tech-stack">Ferramentas utilizadas</a></li>
            <li className="item"><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
