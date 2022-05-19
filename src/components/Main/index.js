import './style.scss';
import Category from 'src/components/Category';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Main() {
  const categoriesList = useSelector((state) => state.categoriesList);

  return (
    <main className="main">

      {categoriesList.map((category) => (
        <Link
          // on ajoute la props to pour que Link sache quelle url utiliser
          to={category.route}
          className="main_link"
          key={category.title}
        >
          <Category {...category} />
        </Link>
      ))}

    </main>
  );
}

export default Main;
