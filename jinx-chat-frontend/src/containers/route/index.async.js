import asyncRoute from 'lib/asyncRoute';

const MainRoute = asyncRoute(() => import('./MainRoute'));
const RegisterRoute = asyncRoute(() => import('./RegisterRoute'));

export {
    MainRoute,
    RegisterRoute,
}