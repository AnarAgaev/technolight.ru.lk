/**
 * Функция для форматирования прошедшего времени с правильным склонением
 * @param dateString - строка с датой в любом формате, который понимает Date
 * @returns строка вида "M месяцев D дней назад"
 */

export const getTimeAgo = (dateString: string): string | null => {
	const orderDate = new Date(dateString)
	const currentDate = new Date()

	if (isNaN(orderDate.getTime())) {
		console.error('Некорректный формат даты. Получено:', dateString)
		return null
	}

	// Вычисляем разницу в миллисекундах
	const diffTime = Math.abs(currentDate.getTime() - orderDate.getTime())
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

	// Вычисляем месяцы и дни
	const months = Math.floor(diffDays / 30)
	const days = diffDays % 30

	const pluralize = (count: number, one: string, few: string, many: string): string => {
		if (count % 10 === 1 && count % 100 !== 11) {
			return one
		} else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
			return few
		} else {
			return many
		}
	}

	const monthsText = pluralize(months, 'месяц', 'месяца', 'месяцев')
	const daysText = pluralize(days, 'день', 'дня', 'дней')

	if (months > 0 && days > 0) {
		return `${months} ${monthsText} ${days} ${daysText} назад`
	} else if (months > 0) {
		return `${months} ${monthsText} назад`
	} else if (days > 0) {
		return `${days} ${daysText} назад`
	} else {
		return 'Сегодня'
	}
}