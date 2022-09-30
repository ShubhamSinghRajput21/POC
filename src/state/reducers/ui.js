import {statusBarColorEnum} from '../../model';

const initialState = Object.freeze({
  statusBarColor: statusBarColorEnum.WHITE,
});

const ui = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ui;
