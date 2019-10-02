const defaultAPI = "https://swapi.co/api/people";

export const getFromStarWarsAPI = async apiToGet => {
	try {
		let res = '';
		if( apiToGet ) {
			res = await fetch(apiToGet);
		} else {
			res = await fetch(defaultAPI);
		}
		const swapiData = await res.json();
		return swapiData;
	} catch (err) {
		console.error(err);
	}
}