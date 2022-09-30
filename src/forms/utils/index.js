export const getErrorText = (errors, touched, field) =>
  errors[field] && touched[field] ? errors[field] : undefined;
