export default class EnumUtils {
	public static toArray = (enumerator: any): Array<any> => {
		return Object.keys(enumerator).map(k => enumerator[k]);
	};
}
