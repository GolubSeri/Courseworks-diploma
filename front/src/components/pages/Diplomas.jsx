import { React } from 'react';
import { Table } from '../elements/table/Table';
import { PageContainer } from '../skeleton/PageContainer';
import { Header } from '../elements/header/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Diplomas = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Дипломные работы</title>
            </Helmet>
            <PageContainer>
                <Header>Дипломные работы</Header>
                <Table endpoint="diplomas"></Table>
            </PageContainer>
        </HelmetProvider>
    );
};
