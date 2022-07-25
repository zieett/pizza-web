export const convertMoney = (money) => {
    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
    });
    return formatter.format(money);
};
export function groupBy(list, key) {
    return list.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}
