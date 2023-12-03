import { useQuery, keepPreviousData } from '@tanstack/react-query';

export const useGetWork = (endpoint, id) => {
    const { data, isLoading } = useQuery({
        queryKey: [`${endpoint.replace('/', '_')}`],
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
            return json;
        },
        placeholderData: keepPreviousData,
    });

    return { data, isLoading };
};
