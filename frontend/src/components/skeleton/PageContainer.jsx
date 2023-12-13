import React, { useState } from 'react';
import { Sidebar } from '../elements/sidebar/Sidebar';
import { FeedBackModal } from '../elements/modals/FeedBackModal';
import './BaseStyles.scss';

export const PageContainer = ({ children, props }) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="wrapper" {...props}>
            <main>
                <section className="main-screen">
                    <Sidebar setModalActive={setModalActive} />
                    <div className="page__body">{children}</div>
                    <FeedBackModal
                        active={modalActive}
                        setActive={setModalActive}
                    ></FeedBackModal>
                </section>
            </main>
        </div>
    );
};
