import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySelect = createSelector(
  [selectDirectory],
  directory => directory.sections
);

