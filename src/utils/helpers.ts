export function addThousandSeparators(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function semaforoStock(stock: number) {
	if (stock > 10) {
		return "text-success";
	} else if (stock > 0) {
		return "text-warning";
	} else {
		return "text-danger";
	}
}