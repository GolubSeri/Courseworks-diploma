import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { SidebarItem } from './components/SidebarItem';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export const Sidebar = ({ setModalActive }) => {
    const navigation = [
        {
            Разделы: [
                {
                    text: 'Курсовые работы',
                    href: '/courseworks',
                    img: 'coursework',
                },
                { text: 'Дипломные работы', href: '/diplomas', img: 'diploma' },
            ],
            'Связь с нами': [
                {
                    text: 'Оставить заявку',
                    href: '#',
                    img: 'feedback',
                    func: () => {
                        setModalActive(true);
                    },
                },
            ],
        },
    ];

    return (
        <Drawer
            anchor="left"
            variant="permanent"
            PaperProps={{ style: { position: 'absolute' } }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#1E293B',
                    maxHeight: '781px',
                },
            }}
        >
            <Link to={'/courseworks'} className="sidebar__title">
                Коллеция студенческих работ
            </Link>
            <List
                sx={{
                    padding: '0',
                }}
            >
                {Object.entries(navigation).map(([k, v]) =>
                    Object.entries(v).map(([key, value]) => (
                        <div
                            className="sidebar__section"
                            key={value[k]['text']}
                        >
                            <span className="sidebar__section-title">
                                {key}
                            </span>
                            {value.map((item) => (
                                <SidebarItem key={item['text']} item={item} />
                            ))}
                        </div>
                    )),
                )}
            </List>
        </Drawer>
    );
};
