import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import MainLayout from '../layouts/MainLayouts';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const router = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/:category/search/:keyword', element: <Catalog />
            },
            {
                path: '/:category/:id', element: <Detail />
            },
            {
                path: '/:category', element: <Catalog />
            },
        ]
    }
]

export default router