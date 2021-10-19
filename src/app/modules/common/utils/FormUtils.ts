export class FormUtils {

	public static toUpdateValue<ToUpdate, Record>(update: ToUpdate, record: Record, exclude: Array<keyof ToUpdate> = []): Partial<ToUpdate> {
		const keys = Object.keys(record ?? {});
		const result: Partial<ToUpdate> = {};
		for (const k of keys) {
			// @ts-ignore
			if (!exclude.some(x => x === k) && record?.[k] !== update?.[k]) {
				// @ts-ignore
				result[k] = update?.[k];
			}
		}
		return result;
	}


	public static setInitialData<Selected, Initial>(selected: Selected, exclude: Array<keyof Selected> = []): Initial {
		const keys: Array<keyof Selected> = Object.keys(selected ?? {}).map(x => x as keyof Selected);
		const result: any = {};
		for (const k of keys) {
			const isExcluded = exclude.some(x => x === k);

			if (selected[k] !== undefined && !isExcluded) {
				result[k] = selected[k];
			} else {
				result[k] = '';
			}
		}
		return result;
	}


}


