import LandingPage from '../Feature/LandingPage';

const routes = [
    {
        name:'LandingPage',
        path:'/',
        component: LandingPage,
        exact: true
    },
    // {
    //     name:'details',
    //     path:'/details/:id/:price',
    //     component: Details,
    //     exact: true
    // }
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