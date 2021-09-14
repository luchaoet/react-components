import { IRouterConfig } from 'ice';
// import BasicLayout from '@/layouts/BasicLayout';
import Test from '@/pages/Test';
import Test2 from '@/pages/Test2';
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
      {
        path: '/test2',
        component: Test2,
      },
    ],
  },
];
export default routerConfig;
