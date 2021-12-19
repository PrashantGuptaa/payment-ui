export const getDate = (date) =>  (new Date(date)).toDateString().slice(4, 10);

export const convertToIndianMoneyFormat = (amount) => Intl.NumberFormat('en-IN').format(amount);