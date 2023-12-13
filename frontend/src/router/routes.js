import { Courseworks } from '../components/pages/Courseworks';
import { Diplomas } from '../components/pages/Diplomas';
import { SingleWork } from '../components/pages/SingleWork';

export const publicRoutes = [
    { path: '/courseworks', element: <Courseworks></Courseworks> },
    { path: '/courseworks/:id', element: <SingleWork></SingleWork> },
    { path: '/diplomas', element: <Diplomas></Diplomas> },
    { path: '/diplomas/:id', element: <SingleWork></SingleWork> },
];
