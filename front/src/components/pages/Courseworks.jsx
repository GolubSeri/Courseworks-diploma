import { React } from 'react';
import { Table } from '../elements/table/Table';
import { PageContainer } from '../skeleton/PageContainer';
import { Header } from '../elements/header/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Courseworks = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Курсовые работы</title>
            </Helmet>
            <PageContainer>
                <Header>Курсовые работы</Header>
                <Table endpoint="courseworks"></Table>
            </PageContainer>
        </HelmetProvider>
    );
};
