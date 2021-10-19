import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEntity } from 'api/interfaces/IEntity';
import { IPaginatedEntity } from 'api/interfaces/IPaginatedEntity';
import { PaginatorIn, PaginatorOut } from 'app/modules/common/store/shared-types';
import { APP_MODULES } from 'app/modules/common/constants';
import { App_Modules } from 'api/graphql/schema/types';


export type TableRecord = IEntity


export type TableContext = APP_MODULES

export type GenericTableState = {
	loading: boolean;
	context: TableContext
	query: string | null | undefined;
	paginator: {
		withPagination: boolean,
		in: PaginatorIn,
		out: PaginatorOut
	},

	items: Array<TableRecord>
	selected: Array<TableRecord>
}

const initialState: GenericTableState = {
	query: undefined,
	context: App_Modules.Files ,
	loading: false,
	items: [],
	selected: [],
	paginator: {
		withPagination: true,
		in: {
			page: 1,
			rowsPerPage: 10,
			order: {
				direction: 'asc',
				id: undefined
			}
		},
		out: {
			total: 0,
			limit: 10,
			pages: 1,
			currentPage: 1
		}
	}
};


export const genericTableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		setPaginatedData: (state, action: PayloadAction<IPaginatedEntity<TableRecord>>) => {

			state.paginator = {
				...state.paginator, out: {
					pages: action.payload.totalPages,
					currentPage: action.payload.currentPage,
					total: action.payload.total,
					limit: action.payload.limit
				}
			};

			state.items = action.payload.items;
			state.loading = false;
		},

		setContext: (state, action: PayloadAction<TableContext>) => {
			state.context = action.payload;
		},
		setItems: (state, action: PayloadAction<Array<TableRecord>>) => {
			state.items = action.payload;
			state.loading = false;
		},

		setSelected: (state, action: PayloadAction<Array<TableRecord>>) => {
			state.selected = action.payload;
		},

		setQuery: (state, action: PayloadAction<string | null>) => {
			state.query = action.payload;
		},

		unSetSelected: (state) => {
			state.selected = [];
		},

		setPaginatorIn: (state, action: PayloadAction<PaginatorIn>) => {

			state.paginator = {
				...state.paginator, in: action.payload
			};
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		cleanPaginatorIn: (state) => {
			state.paginator = {
				...state.paginator, in: initialState.paginator.in
			};
		},

		cleanAllTableData: (state) => {
			state = { ...initialState };
		}
	}
});

export const {
	setLoading,
	setPaginatedData,
	setSelected,
	cleanAllTableData,
	setContext,
	cleanPaginatorIn,
	setItems,
	setPaginatorIn,
	unSetSelected,
	setQuery
} = genericTableSlice.actions;

export default genericTableSlice.reducer;