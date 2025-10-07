export const formatPrice = (value: string | number): string => {
	const number = typeof value === 'string' ? parseFloat(value) : value
	if (isNaN(number)) return ''
	return number.toLocaleString('ru-RU')
}
