export const selectProfile = state => state.account?.profile;
export const selectStatus = state => state.account?.status;
export const selectAllInterests = state => state.account?.allInterests;
export const selectInterests = state => state.account?.interests;
export const selectPhotos = state => state.account?.userPhotos;
export const selectAllQuestions = state => state.account?.allQuestions;
export const selectQuestionsResponse = state =>
  state.account?.questionsResponse;
