const HU = {
  date(date) {
    return new Intl.DateTimeFormat("hu-HU").format(date);
  },
  curreny(amount) {
    return new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
    }).format(amount);
  },
  list(strArr) {
    return `${[...strArr.slice(0, -1)].join(", ")} és ${strArr[strArr.length-1]}`;
  },
};

export default HU;
