import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', CidadesController.index);

router.post('/', CidadesController.create);

export { router };