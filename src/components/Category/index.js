import './style.scss';
import PropTypes from 'prop-types';

function Category({ title, list }) {
  return (
    <div className="category">
      <h3 className="main_title">{title}</h3>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};

export default Category;
