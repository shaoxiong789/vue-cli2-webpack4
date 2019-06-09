// const Index = () => import('./views/index.vue');
// import Layout from './views/layout/Layout';
import dashboard from './views/dashboard';
const routes = [{
  path: '/',
  name: 'dashboard',
  component: (resolve) => require(['./views/layout/Layout'], resolve),
  children: [{
    path: 'dashboard',
    component: (resolve) => require(['./views/dashboard'], resolve)
  }]
}];

export default routes;
