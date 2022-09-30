import i18next from 'i18next';
import buildFormSchema from '../validations/buildFormSchema';

export const PHONE_NUMBER_FIELD = 'number';
export const FULL_NAME_FIELD = 'name';
export const DOB_FIELD = 'date';
export const EMAIL_FIELD = 'email';
export const DEGREE_FIELD = 'degree';
export const UNIVERSITY_FIELD = 'university';
export const JOB_FIELD = 'jobTitle';
export const COMPANY_FIELD = 'companyName';
export const FEEDBACK_FIELD = 'feedback';
export const BIO_FIELD = 'bio';

export const emailSchema = buildFormSchema({
  fields: [
    {
      name: EMAIL_FIELD,
      type: 'email',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:email'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:email'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 50,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:email'),
            value: 50,
          }),
        },
        {
          type: 'matches',
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: i18next.t('validations:invalid', {
            field: i18next.t('onBoarding:email'),
          }),
        },
      ],
    },
  ],
});

export const editProfileSchema = buildFormSchema({
  fields: [
    {
      name: BIO_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('settings:bio'),
          }),
        },
        {
          type: 'min',
          value: 20,
          message: i18next.t('validations:minLength', {
            field: i18next.t('settings:bio'),
            value: 20,
          }),
        },
        {
          type: 'max',
          value: 300,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('settings:bio'),
            value: 300,
          }),
        },
      ],
    },
  ],
});

export const phoneNumberSchema = buildFormSchema({
  fields: [
    {
      name: PHONE_NUMBER_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('login:phoneNumber'),
          }),
        },
        {
          type: 'min',
          value: 10,
          message: i18next.t('validations:minLength', {
            field: i18next.t('login:phoneNumber'),
            value: 10,
          }),
        },
        {
          type: 'max',
          value: 10,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('login:phoneNumber'),
            value: 10,
          }),
        },
      ],
    },
  ],
});

export const basicDetailsSchema = buildFormSchema({
  fields: [
    {
      name: FULL_NAME_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:fullname'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:fullname'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 30,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:fullname'),
            value: 30,
          }),
        },
      ],
    },
    {
      name: DOB_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:dob'),
          }),
        },
      ],
    },
    {
      name: EMAIL_FIELD,
      type: 'email',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:email'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:email'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 50,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:email'),
            value: 50,
          }),
        },
        {
          type: 'matches',
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: i18next.t('validations:invalid', {
            field: i18next.t('onBoarding:email'),
          }),
        },
      ],
    },
  ],
});

export const educationalDetailsSchema = buildFormSchema({
  fields: [
    {
      name: DEGREE_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:educationalDegree'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:educationalDegree'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 30,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:educationalDegree'),
            value: 30,
          }),
        },
      ],
    },
    {
      name: UNIVERSITY_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:university'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:university'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 30,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:university'),
            value: 30,
          }),
        },
      ],
    },
  ],
});

export const jobDetailsSchema = buildFormSchema({
  fields: [
    {
      name: JOB_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:jobTitle'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:jobTitle'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 30,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:jobTitle'),
            value: 30,
          }),
        },
      ],
    },
    {
      name: COMPANY_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('onBoarding:companyName'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('onBoarding:companyName'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 30,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('onBoarding:companyName'),
            value: 30,
          }),
        },
      ],
    },
  ],
});

export const feedbackDetailsSchema = buildFormSchema({
  fields: [
    {
      name: FEEDBACK_FIELD,
      type: 'text',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('settings:feedBack'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('settings:feedBack'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 300,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('settings:feedBack'),
            value: 30,
          }),
        },
      ],
    },
    {
      name: EMAIL_FIELD,
      type: 'email',
      validations: [
        {
          type: 'required',
          message: i18next.t('validations:required', {
            field: i18next.t('settings:email'),
          }),
        },
        {
          type: 'min',
          value: 4,
          message: i18next.t('validations:minLength', {
            field: i18next.t('settings:email'),
            value: 4,
          }),
        },
        {
          type: 'max',
          value: 50,
          message: i18next.t('validations:maxLength', {
            field: i18next.t('settings:email'),
            value: 50,
          }),
        },
        {
          type: 'matches',
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: i18next.t('validations:invalid', {
            field: i18next.t('settings:email'),
          }),
        },
      ],
    },
  ],
});
