import {number} from 'yup';

const createNumberSchema = ({name, validations = []}) => {
  let schema = number().typeError('Please enter a valid number.');
  validations.forEach(({type, value, message}) => {
    switch (type) {
      case 'required':
        schema = schema.required(message);
        break;
      case 'integer':
        schema = schema.integer(message);
        break;
      case 'positive':
        schema = schema.positive(message);
        break;
      case 'min':
        schema = schema.min(value, message);
        break;
      case 'max':
        schema = schema.max(value, message);
        break;
      default:
        throw new Error(
          `NumberSchema: validation type ${type} not implemented for field ${name}.`,
        );
    }
  });
  return schema;
};

export default createNumberSchema;
