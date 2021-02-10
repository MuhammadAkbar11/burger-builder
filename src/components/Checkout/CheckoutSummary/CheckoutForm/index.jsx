import React, { useEffect } from "react";
import {
  Box,
  MenuItem,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import useStyles, { CheckoutButton } from "./styles";
import Payments from "./PaymentMethods";
import { realtimeDatabase } from "../../../../services/firebase";
import { Formik } from "formik";
import { initialValues, checkoutSchema } from "./CheckoutFormSchema";

const CheckoutForm = () => {
  const classes = useStyles();

  const [dataMonths, setDataMonths] = React.useState([]);
  const [dataYears, setDataYears] = React.useState([]);

  const getMonthsAndYearsOption = async () => {
    return await realtimeDatabase.ref("payment/methods/credit_card/data").on(
      "value",
      snapshot => {
        const { months, years } = snapshot.val();
        setDataMonths(months);
        setDataYears(years);
      },
      err => console.log(err)
    );
  };

  useEffect(() => {
    getMonthsAndYearsOption();
  }, []);

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        const {
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isValid,
        } = formik;

        return (
          <React.Fragment>
            <form className={classes.root} onSubmit={handleSubmit}>
              {/* basic information */}
              <Box className={classes.formBox}>
                <Typography className={classes.formTitle} variant="h5">
                  Informasi Anda
                </Typography>
                <div className={classes.formGroupRow}>
                  {/* First Name */}
                  <TextField
                    error={touched.firstName && errors.firstName ? true : false}
                    className={classes.textField}
                    fullWidth
                    label="Nama Depan"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    helperText={
                      touched.firstName && errors.firstName && errors.firstName
                    }
                    id="firstName"
                    name="firstName"
                  />
                  {/* Last Name */}
                  <TextField
                    className={`${classes.textField} right`}
                    fullWidth
                    label="Nama Belakang"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={touched.lastName && errors.lastName ? true : false}
                    helperText={
                      touched.lastName && errors.lastName && errors.lastName
                    }
                    id="lastName"
                    name="lastName"
                  />
                </div>
                {/* E-mail */}
                <TextField
                  type="email"
                  fullWidth
                  label="Alamat e-mail"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email ? true : false}
                  helperText={touched.email && errors.email && errors.email}
                  id="email"
                  name="email"
                />
              </Box>

              {/* Shipping address */}
              <Box className={classes.formBox}>
                <Typography className={classes.formTitle} variant="h5">
                  Alamat pesanan
                </Typography>

                <Grid container spacing={3}>
                  <Grid item sm={12}>
                    {/* City */}
                    <TextField
                      fullWidth
                      label="Kota"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shipping.city}
                      error={
                        touched.shipping?.city && errors.shipping?.city
                          ? true
                          : false
                      }
                      helperText={
                        touched.shipping?.city &&
                        errors.shipping?.city &&
                        errors.shipping?.city
                      }
                      id="shipping.city"
                      name="shipping.city"
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    {/* Street */}
                    <TextField
                      fullWidth
                      label="Alamat Rumah"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shipping.street}
                      error={
                        touched.shipping?.street && errors.shipping?.street
                          ? true
                          : false
                      }
                      helperText={
                        touched.shipping?.street &&
                        errors.shipping?.street &&
                        errors.shipping?.street
                      }
                      id="shipping.street"
                      name="shipping.street"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} md={2}>
                    <TextField fullWidth label="RT" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={3} md={2}>
                    <TextField fullWidth label="RW" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    {/* Zip Code */}
                    <TextField
                      fullWidth
                      label="ZIP"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shipping.zip}
                      error={
                        touched.shipping?.zip && errors.shipping?.zip
                          ? true
                          : false
                      }
                      helperText={
                        touched.shipping?.zip &&
                        errors.shipping?.zip &&
                        errors.shipping?.zip
                      }
                      id="shipping.zip"
                      name="shipping.zip"
                    />
                  </Grid>
                </Grid>
              </Box>
              {/* payment method */}
              <Box className={classes.formBox}>
                <Typography className={classes.formTitle} variant="h5">
                  Informasi pembayaran
                </Typography>
                <Payments />
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    {/* Credit number */}
                    <TextField
                      className={classes.inputCreditNum}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.creditCard?.number}
                      error={
                        touched.creditCard?.number && errors.creditCard?.number
                          ? true
                          : false
                      }
                      helperText={
                        touched.creditCard?.number &&
                        errors.creditCard?.number &&
                        errors.creditCard?.number
                      }
                      id="creditCard.number"
                      name="creditCard.number"
                      placeholder="Nomor Kartu Kredit"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={5}>
                    {/* Month */}
                    <FormControl component="div" variant="outlined" fullWidth>
                      <InputLabel id="month">Bulan</InputLabel>
                      <Select
                        labelId="month"
                        id="demo-simple-select-outlined"
                        value={values.creditCard?.month}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.creditCard?.month && errors.creditCard?.month
                            ? true
                            : false
                        }
                        id="creditCard.month"
                        name="creditCard.month"
                        label="Bulan"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {dataMonths.map((el, i) => (
                          <MenuItem key={i} value={el}>
                            {el}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.creditCard?.month && errors.creditCard?.month ? (
                        <FormHelperText error>
                          {errors.creditCard?.month}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    {/* Years */}
                    <FormControl fullWidth component="div" variant="outlined">
                      <InputLabel id="month">Tahun</InputLabel>
                      <Select
                        labelId="month"
                        id="demo-simple-select-outlined"
                        value={values.creditCard?.years}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.creditCard?.years && errors.creditCard?.years
                            ? true
                            : false
                        }
                        id="creditCard.years"
                        name="creditCard.years"
                        label="Tahun"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {dataYears.map((el, i) => (
                          <MenuItem key={i} value={el}>
                            {el}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.creditCard?.years && errors.creditCard?.years ? (
                        <FormHelperText error>
                          {errors.creditCard?.years}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    {/* Cvv */}
                    <TextField
                      fullWidth
                      placeholder="CVV"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.creditCard?.CVV}
                      error={
                        touched.creditCard?.CVV && errors.creditCard?.CVV
                          ? true
                          : false
                      }
                      helperText={
                        touched.creditCard?.CVV &&
                        errors.creditCard?.CVV &&
                        errors.creditCard?.CVV
                      }
                      id="creditCard.CVV"
                      name="creditCard.CVV"
                    />
                  </Grid>
                </Grid>
              </Box>
              {/* end of payment method */}
              <Box className={classes.formBox}>
                <Typography variant="caption">
                  Silahkan klik Checkot Now untuk melajutkan transaksi
                </Typography>
                <CheckoutButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid}
                >
                  Checkout Now
                </CheckoutButton>
              </Box>
            </form>
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default CheckoutForm;
