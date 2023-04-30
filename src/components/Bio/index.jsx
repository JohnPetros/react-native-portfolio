import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";
import Resume from "../../assets/curriculo.pdf";

export default function Bio() {
  return (
    <div className="bio">
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/93893533?v=4"
          alt="Foto de perfil"
        />
        <div className="information">
          <h2 className="name">João Pedro Carvalho dos Santos</h2>
          <h3 className="role">Aspirante a Desenvolvedor</h3>
          <ul className="social-links">
            <li>
              <a href="https://github.com/JohnPetros" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-pedro-carvalho-dos-santos-42a0ab222/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <a href={Resume} download className="github-button">
          Baixar Currículo
        </a>
      </div>
      <div className="about-me">
        <h2>Sobre mim</h2>
        <p>
          Atualmente estudante de desenvolvimento de Sistemas na Etec em São
          José dos Campos. Conheci a programação em 2021, quando tive meu
          primeiro contato com a liguagem Python para automatizar processos,
          planilhas Excel e gerar análise de dados, logo pude perceber o poder e
          a facilidade que a tecnologia pode proporcionar em nossas vidas. Meses
          depois conheci e me aficionei mais com o mundo Web e mobile. Desde
          então estudo constantemente a JS-Stack (Reactjs, Nodejs e React
          native), mas também dando uma olhada em outras linguagens,
          frameworks e libs, aprimorando-me cada vez mais para algum dia me
          tornar um grande desenvolvedor.
        </p>
      </div>
    </div>
  );
}
