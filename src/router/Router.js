import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MAIN_LAYOUT, NO_LAYOUT } from '../constants/Layouts';
import { configRoutes } from './ConfigRoutes';
import MainLayout from '../layouts/MainLayout';


const layouts = {
  [NO_LAYOUT]: Fragment,
  [MAIN_LAYOUT]: MainLayout,
};

function Router(props) {
    const routes = configRoutes;
    return (
        <Routes>
            {routes.map((route, index) => {
                let Component = route.component;
                let Layout = layouts[route.layout] || MainLayout;
                Component = (
                    <Layout>
                        <route.component />
                    </Layout>
                );
                return <Route key={index} path={route.path} element={Component} />;
            })}
        </Routes>
    );
}

export default Router;