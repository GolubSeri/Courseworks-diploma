import { React } from 'react';
import { Table } from '../elements/table/Table';
import { PageContainer } from '../skeleton/PageContainer';
import { Header } from '../elements/header/Header';

export const Diplomas = () => {
    return (
        <PageContainer>
            <Header>Дипломные работы</Header>
            <Table endpoint="diplomas"></Table>
        </PageContainer>
    );
};
