import './style.scss';
import logoGitHub from 'src/assets/images/icons/001-github.png';
import logoHTML from 'src/assets/images/icons/002-html-5.png';
import logoPHP from 'src/assets/images/icons/003-php.png';
import logoSass from 'src/assets/images/icons/004-sass.png';
import logoMySQL from 'src/assets/images/icons/005-mysql.png';
import logoReact from 'src/assets/images/icons/006-react.png';
import logoJS from 'src/assets/images/icons/007-js.png';
import logoCSS from 'src/assets/images/icons/008-css.png';
import logoGit from 'src/assets/images/icons/009-git.png';
import logoLinux from 'src/assets/images/icons/linux-logo.png';

function ProjetsList() {
  return (
    <main className="formation">
      <article className="formation_article">
        <p>
          Après une expérience enrichissante dans
          l'enseignement 📖 , je reviens à mon sujet de
          prédilection : le développement informatique 💻.
        </p>
        <p>
          J'ai débuté à ma formation en développement
          informatique à la faculté de Clermont-ferrand. Où
          j'ai validée ma Licence d'informatique. A la fac j'ai
          appris les bases de l'informatique tel que
          l'algorythmique, et mes premiers langages de
          programmation (le C).
        </p>
        <p>
          A la suite de cette licence je me suis tournée vers un
          master dans l'enseignement. Malgrès ce détour de
          l'informatique, je ne repars pas les mains vide.
          J'apprend et je progresse en dicatique, en pédagogie,
          mais je suis également sensibilisé sure la
          différenciation bienveillance en vers autrui car
          chaque personne est unique ! Ce qui me met le pied à
          l'étriller pour l'accessibilité de mes futures site
          Web //TODO METTRE UN SMILEY .
        </p>
        <p>
          Le développement dans la peau!
          Je reprend des cours parce que je ressent le besoin
          d'aller plus loin. J'intègre l'école O'clock. C'est
          du téléprésentiel. Je suis en classe tous les jours,
          mais de chez moi, de facto le télétravail ne me fais
          pas peur //TODO METTRE UN SMILEY
          Avec O'clock, j'apprend le developpement Web avec
          linux, HTML, CSS,Git, GitHub, PHP, SQL, JavaScript
          et un peu de Bootstrap. Dans ce même temps je me
          spécialisé dans le frontend avec React, et redux on
          en profite aussi pour faire un peu de Sass et de
          test unitaire (jest.io) au passage //TODO METTRE UN SMILEY
        </p>
      </article>
      <ul className="formation_listLogo">
        <img src={logoLinux} alt="logo de Git" />
        <img src={logoGitHub} alt="logo de git hub" />
        <img src={logoHTML} alt="logo de HTML" />
        <img src={logoPHP} alt="logo de PHP" />
        <img src={logoSass} alt="logo de Sass" />
        <img src={logoMySQL} alt="logo de My SQL" />
        <img src={logoReact} alt="logo de React" />
        <img src={logoJS} alt="logo de JS" />
        <img src={logoCSS} alt="logo de CSS" />
        <img src={logoGit} alt="logo de Git" />
      </ul>
    </main>
  );
}

export default ProjetsList;
