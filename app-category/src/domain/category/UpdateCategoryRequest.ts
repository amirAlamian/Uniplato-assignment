import Ajv, { JSONSchemaType } from 'ajv';
import { StatusCodes } from 'src/interface/rest/constants/Statuscodes.enum';

export enum TypeEnum {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}
export interface UpdateData {
  type: string
  categoryId: number
}

export class UpdateCategoryRequest {
  ajv: Ajv

  constructor () {
    this.ajv = new Ajv({
      allErrors: true,
      removeAdditional: true,
      messages: false,
      useDefaults: true,
    });
  }

  async validate (data: UpdateData) {
    const schema : JSONSchemaType<UpdateData> = {
      type: 'object',
      additionalProperties: false,
      required: [ 'type', 'categoryId' ],
      properties: {
        type: {
          type: 'string',
          enum: [ 'increase', 'decrease' ],
        },
        categoryId: {
          type: 'number',
          minimum: 1,
        },
      },
    };
    const validateFields = this.ajv.compile(schema);

    if (validateFields(data)) {
      return true;
    } else {
      throw { statusCode: StatusCodes.BAD_REQUEST, errors: validateFields.errors };
    }
  }
}
