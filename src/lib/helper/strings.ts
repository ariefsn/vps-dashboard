export const capitalize = (str: string) => {
	return str
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const slugify = (str: string) => {
	return str
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
};

export const limitText = (text: string, limit: number) => {
	return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export const formatNumber = (num: number) => {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const copyClipboard = (text: string) => {
	navigator.clipboard.writeText(text);
};

export const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
};
