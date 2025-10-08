/**
 * Функция для форматирования прошедшего времени с правильным склонением
 * @param dateString - строка с датой в любом формате, который понимает Date
 * @returns строка вида "ДД.ММ.ГГГГ" или null, если дата некорректна
 */
export const formatDate = (dateString: string): string | null => {
	const orderDate = new Date(dateString)

	if (isNaN(orderDate.getTime())) {
		console.error("Некорректный формат даты. Получено:", dateString)
		return null
	}

	// Получаем компоненты даты
	const day = String(orderDate.getDate()).padStart(2, "0")
	const month = String(orderDate.getMonth() + 1).padStart(2, "0")
	const year = orderDate.getFullYear()

	// Возвращаем строку в формате ДД.ММ.ГГГГ
	return `${day}.${month}.${year}`
}