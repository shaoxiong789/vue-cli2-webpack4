// const Index = () => import('./views/index.vue');
import Layout from './views/layout/Layout';
// import dashboard from './views/dashboard';
const dashboard = import(/* webpackChunkName: "index2/dashboard" */ './views/dashboard')
const routes = [{
  path: '/',
  name: 'dashboard',
  component: Layout,
  children: [{
    path: 'dashboard',
    component: dashboard
  }]
}];

export default routes;
