export const formatVietnamCurrency = (data) => {
    data = data.toString().replace(/\./g, "");
    const formatted = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      })
      .format(data)
      .trim();
    
    return formatted;
}
export const formatVietnameCurrency2 = (data) => {
    data = data.toString().replace(/\./g, "");
    const formatted = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
      })
      .format(data)
      .trim();
    
    return formatted;
}