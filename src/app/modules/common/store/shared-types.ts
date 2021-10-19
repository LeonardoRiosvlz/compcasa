export type OrderByDirection = 'asc' | 'desc'

export type PaginatorIn = {
	page: number,
	rowsPerPage: number,
	order: {
		direction: OrderByDirection
		id?: string
	}
}

export type PaginatorOut = {
	total: number,
	limit: number,
	pages: number,
	currentPage: number
}