import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from '@lodash';
import { PaginatorIn, PaginatorOut } from 'app/modules/common/store/shared-types';
import { IPaginatedEntity } from 'api/interfaces/IPaginatedEntity';
import { AppNotification } from 'api/repositories/notifications/types/notification.types';


export type NotificationsState = {
	notifications: Array<AppNotification>;
	loading: boolean;
	paginator: {
		in: PaginatorIn,
		out: PaginatorOut
	}
}

const initialState: NotificationsState = {
	notifications: [],
	loading: false,
	paginator: {
		in: {
			page: 1,
			rowsPerPage: 25,
			order: {
				direction: 'desc',
				id: 'createdAt'
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

export const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		setPaginatedNotifications: (state, action: PayloadAction<IPaginatedEntity<AppNotification>>) => {

			state.paginator = {
				...state.paginator, out: {
					pages: action.payload.totalPages,
					currentPage: action.payload.currentPage,
					total: action.payload.total,
					limit: action.payload.limit
				}
			};

			state.notifications = action.payload.items;
			state.loading = false;
		},

		setNotifications: (state, action: PayloadAction<Array<AppNotification>>) => {
			state.notifications = action.payload;
			state.loading = false;
		},

		pushNotification: (state, action: PayloadAction<AppNotification>) => {
			//state.notifications = [...state.notifications, action.payload];
			state.notifications = _.unionBy(state.notifications, [action.payload], (item: AppNotification) => {
				return item.id
			});

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

		cleanAllNotificationData: (state) => {
			state = { ...initialState };
		}
	}
});

export const {
	setLoading,
	cleanPaginatorIn,
	setPaginatorIn,
	cleanAllNotificationData,
	setNotifications,
	pushNotification,
	setPaginatedNotifications
} = notificationSlice.actions;


export default notificationSlice.reducer;