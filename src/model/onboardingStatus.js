// @flow
export const onboardingStatusEnum = {
  PENDING: 'PENDING',
  BASIC_DETAILS: 'BASIC_DETAILS',
  SEXUAL_ORIENTATION: 'SEXUAL_ORIENTATION',
  QUESTIONNAIRE: 'QUESTIONNAIRE',
  EDUCATION: 'EDUCATION',
  JOB: 'JOB',
  INTERESTS: 'INTERESTS',
  IMAGES_UPLOAD: 'IMAGES_UPLOAD',
  PICTURES_VERIFICATION: 'PICTURES_VERIFICATION',
  INTERESTED_IN: 'INTERESTED_IN',
  COMPLETED: 'COMPLETED',
};

export const onboardingStepRoute = {
  BASIC_DETAILS: '/boarding/basic',
  SEXUAL_ORIENTATION: '/boarding/sexualOrientation',
  QUESTIONNAIRE: '/boarding/about',
  EDUCATION: '/boarding/education',
  JOB: '/boarding/job',
  INTERESTS: '/boarding/interests',
  IMAGES_UPLOAD: '/boarding/uploadPictures',
  PICTURES_VERIFICATION: '/boarding/pictureVerification',
  INTERESTED_IN: '/boarding/interestedIn',
  GUIDE_LINE: '/boarding/guideLine',
  COMPLETED: '/home',
};
