import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//LAYOUTS
import MainLayout from "../layouts/MainLayout";

//PAGES
const LoginPage = React.lazy(() => import('../../pages/LoginPage'));
const DashboardPage = React.lazy(() => import('../../pages/DashboardPage'));
const ProductListPage = React.lazy(() => import('../../pages/ProductListPage'));
const ProductLogPage = React.lazy(() => import('../../pages/ProductLogPage'));
const ProductDetailsPage = React.lazy(() => import('../../pages/ProductDetailsPage'));
const OutletsPage = React.lazy(() => import('../../pages/OutletsPage'));
const RackListPage = React.lazy(() => import('../../pages/RackListPage'));
const ProjectsPage = React.lazy(() => import('../../pages/ProjectsPage'));

type Props = {}

const AppRouter = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="outlets" element={<OutletsPage />} />
                    <Route path="products" element={<ProductListPage />} />
                    <Route path="products/:id" element={<ProductDetailsPage />} />
                    <Route path="rack" element={<RackListPage />} />
                    <Route path="log" element={<ProductLogPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter