import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(8080),
  CORS_ORIGINS: Joi.string().required(),
  APP_PREFIX: Joi.string().default('/api/v1'),
});
