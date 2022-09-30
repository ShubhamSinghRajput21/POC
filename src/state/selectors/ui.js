// @flow
import type {StatusBarColor} from '../../model';

export const selectStatusBarColor = (state): StatusBarColor =>
  state.ui.statusBarColor;
