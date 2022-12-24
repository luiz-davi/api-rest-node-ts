import { RequestHandler } from 'express';
import { SchemaOf, ValidationError } from 'yup';
import { StatusCodes } from 'http-status-codes';

type TProperty = 'body' | 'header' | 'params' | 'query';
type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<T>;
type TAllSchemas = Record<TProperty, SchemaOf<any>>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation = (getAllSchemas: TGetAllSchemas ) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
  const schemas = getAllSchemas(schema => schema);
  const errorResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
  
      //return next();
    } catch (err) {
      const yupError = err as ValidationError;
      // definindo um tipo para um tipo inesperado de uma função catch
      const errors: Record<string, string> = {};
      // define a forma de um objeto
  
      yupError.inner.forEach((infos) => {
        if(!infos.path) { return; }
  
        errors[infos.path] = infos.errors.join(', ');
      });
      
      errorResult[key] = errors;
    }
  });

  if (Object.entries(errorResult).length === 0 ) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorResult });
  }
};