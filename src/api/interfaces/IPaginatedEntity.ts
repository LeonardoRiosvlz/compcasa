export interface IPaginatedEntity<E> {
    totalPages: number;
    limit: number;
    total: number;
    currentPage: number;
    items: Array<E>
}
