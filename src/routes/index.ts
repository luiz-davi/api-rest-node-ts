import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', CidadesController.index);

router.post(
  '/cities', 
  CidadesController.createValidation, 
  CidadesController.create
);

export { router };