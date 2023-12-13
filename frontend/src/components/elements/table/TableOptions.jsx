import { useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_RU } from 'material-react-table/locales/ru';
import { useNavigate } from 'react-router-dom';
import { MyTableFilter } from './components/MyTableFilter';

const placeholders = {
    topic: 'Тема',
    score: 'Оценка',
    teacher: 'Научный руководитель',
    student: 'Студент',
};

export const TableOptions = (
    columns,
    data,
    isLoading,
    isRefetching,
    totalRowCount,
    endpoint,
) => {
    const navigate = useNavigate();

    const table = useMaterialReactTable({
        // * 0) Основное
        columns: columns,
        data: data ? data : [],
        initialState: {
            showColumnFilters: true, // Отображать фильтры
        },
        // Состояния
        state: {
            isLoading,
            showProgressBars: isRefetching,
            // pagination,
            // columnFilters,
            // sorting,
        },
        localization: MRT_Localization_RU, // Русская локализация
        // * 1) Настройки работы с сервером
        // manualPagination: true, // Пагинация работает на стороне сервером
        // onPaginationChange: setPagination, // Функция при нажатии на пагинацию
        rowCount: totalRowCount, // Устанавливаю общее кол-ов строк
        // manualFiltering,
        // onColumnFiltersChange: setColumnFilters,
        // manualSorting,
        // onSortingChange: setSorting,
        // * 2) Функционал
        enableColumnActions: false, // Отключается 3 точки (хедер)
        enableTopToolbar: false, // Отключает верхнее меню
        enableFilterMatchHighlighting: false, // Подсветка найденной подсроки при поиске
        enablePagination: data && data.length > 10 ? true : false, // Включаем пагинацию если боьльше 10 строк
        enableBottomToolbar: data && data.length > 10 ? true : false, // Отключаем нижнее меню, если меньше 10 строк
        paginationDisplayMode: 'pages', // Пагинация по страницам
        getRowId: (row) => row.id, // Заменяем id строки на свой, из data
        // * 3) Внешний вид и компоненты
        muiTableBodyRowProps: ({ row }) => ({
            hover: false, // Отключает ховер строк

            onClick: () => {
                navigate(`/${endpoint}/${row.id}`);
            },
            sx: {
                cursor: 'pointer',
            },
        }),
        // Кружок загрузки
        muiCircularProgressProps: {
            thickness: 5,
            size: 55,
        },
        // Скелет таблицы (при загрузке)
        muiSkeletonProps: {
            animation: 'pulse',
            height: 28,
        },
        // Пагинация
        muiPaginationProps: {
            showRowsPerPage: false, // Отключает выбор количества строк на странице
            variant: 'outlined', // Пустая или нет кнопка (внешний вид)
            shape: 'rounded', // Круглая или квадратная
        },
        // Ячейки хедера
        muiTableHeadCellProps: {
            sx: {
                fontWeight: '500',
                fontSize: '14px',
                color: '#64748b',
                paddingTop: '12px',
                paddingBottom: '12px',
                transitionProperty: 'color',
                transitionDuration: '0.15s',
                ':hover': {
                    color: '#1f2937',
                },
            },
        },
        // Оберткая таблицы
        muiTablePaperProps: {
            elevation: 0, // Отключает тень
        },
        // Контейнер без нижней панели
        muiTableContainerProps: {},
        // Строка хедер
        muiTableHeadRowProps: {
            sx: {
                boxShadow: 'none',
            },
        },
        // Обертка нижнего меню (пагинация)
        muiBottomToolbarProps: {
            sx: {
                boxShadow: 'none',
            },
        },
        // Строки
        muiTableBodyProps: {
            data_count: isLoading || (data && data.length) ? 1 : 0,
            sx: {
                '& tr:nth-of-type(even)': {
                    backgroundColor: 'rgba(219, 237, 255, 0.15) !important',
                    '&:hover': {
                        backgroundColor: 'rgba(219, 237, 255, 0.3) !important',
                    },
                },
                '& tr:nth-of-type(odd)': {
                    '&:hover': {
                        backgroundColor: 'rgba(79, 149, 224, 0.08) !important',
                    },
                },
            },
        },
        // Ячейки таблицы
        muiTableBodyCellProps: ({ cell }) => ({
            sx: {
                fontWeight: '400',
                fontSize: '14px',
                color: '#1f2937',
                borderBottom: '1px solid #DADADA80',
                paddingTop: '16px',
                paddingBottom: '12px',
            },
        }),
        // Фильтры
        muiFilterTextFieldProps: ({ column }) => ({
            filterType: column.columnDef.filterVariant,
            placeholder: placeholders[column.columnDef.accessorKey],
            variant: 'outlined',
            size: 'small',
            component: MyTableFilter,
            inputProps: {
                style: {
                    padding: '12px 16px',
                },
            },
        }),
    });

    return table;
};
