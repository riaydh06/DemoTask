import LandingPage from '../Feature/LandingPage';
import DetailsPage from '../Feature/DetailsPage';

const routes = [
    {
        name:'LandingPage',
        path:'/',
        component: LandingPage,
        exact: true
    },
    {
        name:'DetailsPage',
        path:'/Details/:id',
        component: DetailsPage,
        exact: true
    }
]

function routePath(name, args = null) {
    let route = routes.find(route => route.name === name);
  
    if (route === undefined) return '';
    if (args === null) return route.path;
  
    return Object.keys(args).reduce(
      (path, arg) => path.replace(':' + arg, args[arg]),
      route.path
    );
}
  
export default routes;

export { routePath };