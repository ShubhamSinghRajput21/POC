export const selectStatus = state => state?.activity?.status;
export const selectLikes = state => state?.activity?.likes;
export const selectLikesArray = state => state?.activity?.likesArray || [];
export const selectFeedback = state => state?.activity?.feedback;
export const selectMatches = state => state?.activity?.matches || [];
export const selectPlans = state => state?.activity?.plans || [];
export const selectAppSettings = state => state?.activity?.settings;
