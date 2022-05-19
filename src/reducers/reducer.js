import { TOGGLER_PROJECT_PAGE } from 'src/actions/actions';

const initialState = {
  isProjectPage: false,
  categoriesList: [
    {
      title: 'Formations',
      list: ['Licence d\'informatique, faculté de Clermont-Ferrrand', 'Formation développeur web, spécialité React, O\'clock'],
      route: '/formations',
    },
    {
      title: 'Projets',
      list: ['Todolist', 'Site porfolio', 'Site vitrine MIA', 'Calculatrice'],
      route: '/projets',
    },
    {
      title: 'Acquis',
      list: ['React', 'SCSS', 'JS', 'PHP', 'HTML/CSS'],
      route: '/acquis',
    },
  ],
  projectsList: [
    {
      title: 'Portfolio',
      explication: 'Site sur le quel je parle de ma vie professionel, et des différents projet passé, en cours et futur !',
      img: 'Portfolio',
      statut: -1,
      route: '/projets/portfolio',
      label: ['React/SCSS'],
    },
    {
      title: 'Todolist',
      explication: 'Permet de gérer des listes.',
      img: 'Todolist',
      statut: 0,
      route: '/projets/todolist',
      label: ['React/SCSS', 'JS', 'HTML/CSS'],
    },
    {
      title: 'Site vitrine MIA',
      explication: 'Présentatin de la société Mini Inofrmtique d\'Auvergne',
      img: 'SiteVitrineMIA',
      statut: 0,
      route: '/projets/vitrine-MIA',
      label: ['HTML/CSS'],
    },
    {
      title: 'Calculatrice',
      explication: 'c\'est une simple calculatrice !',
      statut: 1,
      route: '/projets/calculatrice',
      label: [],
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLER_PROJECT_PAGE:
      return {
        ...state,
        isProjectPage: !state.isProjectPage,
      };
    default:
      return state;
  }
};

export default reducer;
