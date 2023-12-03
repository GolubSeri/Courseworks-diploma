import { React } from 'react';
import { Table } from '../elements/table/Table';
import { PageContainer } from '../skeleton/PageContainer';
import { Header } from '../elements/header/Header';

export const Courseworks = () => {
    return (
        <PageContainer>
            <Header>Курсовые работы</Header>
            <Table endpoint="courseworks"></Table>
        </PageContainer>
    );
};
