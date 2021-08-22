import { IRouterConfig } from 'ice';
// import BasicLayout from '@/layouts/BasicLayout';
import Test from '@/pages/Test';
import Home from '@/pages/Home'

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    // component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/test',
        component: Test,
      },
    ],
  },
];
export default routerConfig;
