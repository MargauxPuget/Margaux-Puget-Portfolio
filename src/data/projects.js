// statut : -1 -> fini; 0-> en cours; 1 -> future

export default [
  {
    title: 'PortFolio',
    explication: 'Site sur le quel je parle de ma vie professionel, et des différents projet passé, en cours et futur ! ',
    img: '',
    statut: -1,
    route: '/projets/portfolio',
    label: ['React/SCSS'],
  },
  {
    title: 'Todolist',
    explication: 'Permet de gérer des listes.',
    img: '',
    statut: 0,
    route: '/projets/todolist',
    label: ['React/SCSS', 'JS', 'HTML/CSS'],
  },
  {
    title: 'Site vitrine MIA',
    explication: 'Présentatin de la société Mini Inofrmtique d\'Auvergne',
    img: '',
    statut: 0,
    route: '/projets/vitrine-MIA',
    label: ['HTML/CSS'],
  },
  {
    title: 'Calculatrice',
    explication: 'c\'est une simple calculatrice !',
    img: '',
    statut: 1,
    route: '/projets/calculatrice',
    label: [],
  },
];
