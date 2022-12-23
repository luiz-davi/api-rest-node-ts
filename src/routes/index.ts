import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', CidadesController.index);

router.post(
  '/cities', 
  CidadesController.createBodyValidation, 
  CidadesController.createQueryValidation, 
  CidadesController.create
);

export { router };