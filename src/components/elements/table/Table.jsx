import React, { useState, useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { TableOptions } from './TableOptions';
import { useGetCourseworks } from '../../../hooks/useGetCourseworks';
import './Table.scss';

export const Table = ({ endpoint }) => {
    // const [pagination, setPagination] = useState({
    //     pageIndex: 0,
    //     pageSize: 10,
    // });
    // eslint-disable-next-line no-unused-vars
    // const [totalRowCount, setTotalRowCount] = useState(0);
    // const [columnFilters, setColumnFilters] = useState([]);
    // const [sorting, setSorting] = useState([]);

    const [totalRowCount, setTotalRowCount] = useState(0);

    const columns = useMemo(
        () => [
            {
                header: 'Тема',
                accessorKey: 'topic',
            },
            {
                header: 'Оценка',
                accessorKey: 'score',
                filterSelectOptions: [
                    { label: 'Отлично', value: 'Отлично' },
                    { label: 'Хорошо', value: 'Хорошо' },
                    { label: 'Удовлeтворительно', value: 'Удовлeтворительно' },
                    {
                        label: 'Неудовлeтворительно',
                        value: 'Неудовлeтворительно',
                    },
                ],
                filterVariant: 'multi-select',
            },
            {
                header: 'Студент',
                accessorKey: 'student',
            },
            {
                header: 'Науч. рук.',
                accessorKey: 'teacher',
            },
            {
                header: 'Дата',
                accessorKey: 'date',
                enableColumnFilter: false,
            },
        ],
        [],
    );

    // * Получаю данные с сервера
    const { data, isRefetching, isLoading } = useGetCourseworks(
        setTotalRowCount,
        endpoint,
    );

    const table = TableOptions(
        columns,
        data,
        isLoading,
        isRefetching,
        totalRowCount,
        endpoint,
    );

    return (
        <div className="table__body">
            <div id="table_filters" className="table__filters"></div>
            <MaterialReactTable table={table} />
        </div>
    );
};
