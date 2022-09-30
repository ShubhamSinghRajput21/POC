import createDateSchema from './createDateSchema';
import createEmailSchema from './createEmailSchema';
import createNumberSchema from './createNumberSchema';
import createStringSchema from './createStringSchema';

const createSchema = field => {
  const validationType = field.validationType || field.type;
  switch (validationType) {
    case 'date':
      return createDateSchema(field);
    case 'email':
      return createEmailSchema(field);
    case 'number':
      return createNumberSchema(field);
    case 'text':
      return createStringSchema(field);
    default:
      throw new Error(
        `createSchema: ${validationType} validation schema not implemented for field ${field.name}.`,
      );
  }
};

export default createSchema;
