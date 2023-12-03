import { useQuery, keepPreviousData } from '@tanstack/react-query';

export const useGetCourseworks = (setTotalRowCount, endpoint) => {
    const { data, isRefetching, isLoading } = useQuery({
        queryKey: [
            endpoint,
            // pagination.pageIndex, //refetch when pagination.pageIndex changes
            // pagination.pageSize, //refetch when pagination.pageSize changes
            // columnFilters, //refetch when columnFilters changes
            // sorting, //refetch when sorting changes
        ],
        queryFn: async () => {
            const fetchURL = new URL(`http://localhost:3001/api/${endpoint}`);
            // Параметры для пагинации - страница и кол-во элементов
            // fetchURL.searchParams.set('_page', `${pagination.pageIndex + 1}`);
            // fetchURL.searchParams.set('_limit', `${pagination.pageSize}`);
            // Параметр для фильтров
            // fetchURL.searchParams.set(
            //     'filters',
            //     JSON.stringify(columnFilters ?? []),
            // );
            // Параметр сортировки
            // fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

            const response = await fetch(fetchURL.href);
            const json = await response.json();
            setTotalRowCount(response.headers.get('x-total-count')); // ? Получаю кол-во строк, можно это делать сразу на сервере
            return json;
        },
        placeholderData: keepPreviousData,
    });

    return { data, isRefetching, isLoading };
};
