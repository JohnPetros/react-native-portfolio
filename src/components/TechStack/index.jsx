import { FaReact, FaMobileAlt } from "react-icons/fa";
import "./style.css";

export default function TeckStack() {
  return (
    <section id="tech-stack">
      <h2 className="">Tecnologias utilizadas</h2>
      <ul className="techs">
        <li className="tech">
          <h3 className="tech-name">
            <FaReact color="#23395b" />
            React Native
          </h3>
          <p className="tech-description">
            React Native é uma biblioteca Javascript criada pelo Facebook. É
            usada para desenvolver aplicativos mobile para os sistemas Android e
            iOS de forma nativa
          </p>
        </li>
        <li className="tech">
          <h3 className="tech-name">
            <FaMobileAlt color="#23395b" />
            Expo
          </h3>
          <p className="tech-description">
            Expo é uma ferramenta utilizada no desenvolvimento mobile com React
            Native que permite o fácil acesso às API's nativas do dispositivo
            sem precisar instalar qualquer dependência ou alterar código nativo.
          </p>
        </li>
      </ul>
    </section>
  );
}
