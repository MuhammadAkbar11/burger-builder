import * as YUP from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  shipping: {
    city: "",
    street: "",
    zip: "",
  },
  creditCard: {
    number: "",
    month: "",
    years: "",
    CVV: "",
  },
};

const checkoutSchema = YUP.object().shape({
  firstName: YUP.string().required("Wajib diisi"),
  lastName: YUP.string().required("Wajib diisi"),
  email: YUP.string().email("E-mail tidak benar").required("Wajib diisi"),
  shipping: YUP.object().shape({
    city: YUP.string().required("Wajib diisi"),
    street: YUP.string().required("Wajib diisi"),
    zip: YUP.string().required("Wajib diisi"),
  }),
  creditCard: YUP.object().shape({
    number: YUP.number().typeError("Nomor tidak valid").required("Wajib diisi"),
    month: YUP.string().required("Wajib diisi"),
    years: YUP.string().required("Wajib diisi"),
    CVV: YUP.number().typeError("Harus angka").required("Wajib diisi"),
  }),
});

export { initialValues, checkoutSchema };
