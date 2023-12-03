import React from 'react';
import { Sidebar } from '../elements/sidebar/Sidebar';
import './BaseStyles.scss';

export const PageContainer = ({ children, props }) => {
    return (
        <div className="wrapper" {...props}>
            <main>
                <section className="main-screen">
                    <Sidebar />
                    <div className="page__body">{children}</div>
                </section>
            </main>
        </div>
    );
};
