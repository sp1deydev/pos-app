export const handleTotalPrice = (data) => {
    return data.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
}