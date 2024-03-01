export const getStringDate = (date) => {
  const input_year = date.getFullYear();
  const input_month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const input_date = date.getDate();
  return `${input_year}-${input_month}-${input_date}`;
};
