import './style.scss';
import icon from 'src/assets/images/icons/clin-doeil.png';

function Footer() {
  return (
    <footer className="footer">
      <h6 className="footer_title">Margaux Puget</h6>
      <p>développeuse web</p>
      <p>Si vous voulez me contacter, j'en serais ravie ! <img src={icon} alt="" />
      </p>
    </footer>
  );
}

export default Footer;
