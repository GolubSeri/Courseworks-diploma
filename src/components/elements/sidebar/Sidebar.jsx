import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { SidebarItem } from './components/SidebarItem';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const navigation = [
    { text: 'Курсовые работы', href: '/courseworks', img: 'coursework' },
    { text: 'Дипломные работы', href: '/diplomas', img: 'diploma' },
];

export const Sidebar = () => {
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
                },
            }}
        >
            <Link to={'/courseworks'} className="sidebar__title">
                Коллеция студенческих работ
            </Link>
            <span className="sidebar__section-title">Разделы</span>
            <List
                sx={{
                    padding: '0',
                }}
            >
                {navigation.map((item) => (
                    <SidebarItem key={item['text']} item={item} />
                ))}
            </List>
        </Drawer>
    );
};
