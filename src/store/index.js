import { legacy_createStore as createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/reducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
