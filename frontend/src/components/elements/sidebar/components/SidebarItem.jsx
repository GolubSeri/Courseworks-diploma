import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SidebarItem = ({ item }) => {
    const navigate = useNavigate();
    const path = window.location.pathname;

    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={(e) => {
                    if (item['href'] !== '#') {
                        navigate(item['href']);
                    } else {
                        item['func']();
                    }
                }}
                className={`sidebar__item ${
                    path.includes(item['href']) ? '_active' : ''
                }`}
                sx={{
                    '&:hover': {
                        backgroundColor: '#213258',
                    },
                }}
            >
                <img
                    className="sidebar_item__image"
                    src={`/images/sidebar/icons/${item['img']}.png`}
                    alt=""
                />
                <ListItemText
                    sx={{
                        fontWeight: '500',
                    }}
                    primary={
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: '500',
                                fontSize: '14px',
                                color: '#e2e8f0',
                            }}
                        >
                            {item['text']}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
};
