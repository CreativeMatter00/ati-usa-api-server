import express from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { careerRoutes } from '../modules/career/career.route';
import { ourServiceRoutes } from '../modules/service/ourService.route';
import { tecTalentsRoutes } from '../modules/technicalTalents/tecTalents.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/our-service',
    route: ourServiceRoutes,
  },
  {
    path: '/career',
    route: careerRoutes,
  },
  {
    path: '/tecTalents',
    route: tecTalentsRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
