type Route = {
    key: string;
    path: string;
    icon_name: string;
    name: string;
}

const routes: Route[] = [
    {
        key: 'main_dashboard',
        path: '/',
        icon_name: 'ri-dashboard-fill',
        name: 'Dashboard'
    },
    {
        key: 'main_outlets',
        path: '/outlets',
        icon_name: 'ri-store-3-line',
        name: 'Outlets'
    },
    {
        key: 'main_rack',
        path: '/rack',
        icon_name: 'ri-file-list-3-line',
        name: 'Rack List'
    },
    {
        key: 'main_log',
        path: '/log',
        icon_name: 'ri-terminal-box-line',
        name: 'Product Log'
    },
    {
        key: 'main_projects',
        path: '/projects',
        icon_name: 'ri-computer-line',
        name: 'Projects'
    },
    {
        key: 'main_products',
        path: '/products',
        icon_name: 'ri-aspect-ratio-line',
        name: 'Products'
    },
];


export default routes;