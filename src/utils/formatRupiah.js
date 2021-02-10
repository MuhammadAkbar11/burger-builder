const formatRupiah = value => {
  const result = value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
  return result;
};

export default formatRupiah;
