export const vehicleMakeModelFormatter = string => {
	const splittedModel = string.split(' ');

	return {
		make: splittedModel[0],
		model: splittedModel.slice(1).join(' '),
	};
};

export const currencyFormatter = ({ amount, currency }) =>
	new Intl.NumberFormat('en-EN', {style: 'currency', currency: currency === 'euro' ? 'EUR' : 'USD'})
		.format(amount / 100)