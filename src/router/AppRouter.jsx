import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';

export const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Navigate to="/courseworks" replace />} />
        </Routes>
    );
};
