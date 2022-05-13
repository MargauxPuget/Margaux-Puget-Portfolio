// import './style.scss';
// import PropTypes from 'prop-types';

function Projet() {
  return (
    <div className="project_card">
      <img className="project_card_img" src="https://randomfox.ca/images/6.jpg" alt="apperçue du site" />
      <div className="project_card_infos">
        <h3 className="project_card_infos_title">TodoList</h3>
        <p className="project_card_infos_text">Permet de gérer des listes.</p>
        <span className="project_card_infos_label">HTML/SCC</span>
        <span className="project_card_infos_label">JS</span>
        <span className="project_card_infos_label">React/SCSS</span>
        <span className="project_card_infos_label">PHP</span>
      </div>
    </div>
  );
}

export default Projet;
