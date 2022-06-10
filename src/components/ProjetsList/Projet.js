// import './style.scss';
import PropTypes from 'prop-types';

// TODO import de images

function Projet({
  title,
  explication,
  label,
}) {
  return (
    <div className="project_card">
      <img className="project_card_img" src="https://randomfox.ca/images/6.jpg" alt="apperçue du site" />
      <div className="project_card_infos">
        <h3 className="project_card_infos_title">{title}</h3>
        <p className="project_card_infos_text">{explication}</p>
        <div className="project_card_infos_label">
          {label.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

Projet.propTypes = {
  title: PropTypes.string.isRequired,
  explication: PropTypes.string.isRequired,
  label: PropTypes.array,
};

Projet.defaultProps = {
  label: '',
};

export default Projet;
