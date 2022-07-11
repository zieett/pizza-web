export const convertMoney = (money) => {
    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
    });
    return formatter.format(money);
};
