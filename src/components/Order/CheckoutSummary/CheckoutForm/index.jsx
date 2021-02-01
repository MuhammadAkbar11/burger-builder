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
} from "@material-ui/core";
import useStyles, { CheckoutButton } from "./styles";
import Payments from "./PaymentMethods";
import { realtimeDatabase } from "../../../../services/firebase";

const CheckoutForm = () => {
  const classes = useStyles();

  const [dataMonths, setDataMonths] = React.useState([]);
  const [dataYears, setDataYears] = React.useState([]);

  const [selectMonth, setSelectMonth] = React.useState("");
  const [selectYears, setSelectYears] = React.useState("");

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

  return (
    <form className={classes.root}>
      <Box className={classes.formBox}>
        <Typography className={classes.formTitle} variant="h5">
          Informasi dasar
        </Typography>
        <div className={classes.formGroupRow}>
          <TextField
            className={classes.textField}
            fullWidth
            label="Nama Depan"
            variant="outlined"
          />
          <TextField
            className={`${classes.textField} right`}
            fullWidth
            label="Nama Belakang"
            variant="outlined"
          />
        </div>

        <TextField
          type="email"
          fullWidth
          label="Alamat e-mail"
          variant="outlined"
        />
      </Box>
      <Box className={classes.formBox}>
        <Typography className={classes.formTitle} variant="h5">
          Alamat pesanan
        </Typography>

        <TextField
          className={classes.textField}
          fullWidth
          label="Alamat Lengkap"
          multiline
          rows={3}
          variant="outlined"
          placeholder="contoh : (Jl. Menteng Wadas Timur No 45, RT.11/RW.1, Pasar manggis, Jakarta Selatan, Jakarta )"
        />
      </Box>
      <Box className={classes.formBox}>
        <Typography className={classes.formTitle} variant="h5">
          Informasi pembayaran
        </Typography>
        <Payments />

        <TextField
          className={`${classes.textField} ${classes.inputCreditNum}`}
          placeholder="Nomor Kartu Kredit"
          variant="outlined"
        />

        <br />
        <div className={classes.creditCardRow}>
          <FormControl
            component="div"
            variant="outlined"
            fullWidth
            className={classes.select}
          >
            <InputLabel id="month">Bulan</InputLabel>
            <Select
              labelId="month"
              id="demo-simple-select-outlined"
              value={selectMonth}
              onChange={e => setSelectMonth(e.target.value)}
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
          </FormControl>
          <FormControl
            fullWidth
            component="div"
            variant="outlined"
            className={classes.select}
          >
            <InputLabel id="month">Tahun</InputLabel>
            <Select
              labelId="month"
              id="demo-simple-select-outlined"
              value={selectYears}
              onChange={e => setSelectYears(e.target.value)}
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
          </FormControl>
          <TextField placeholder="CVV" variant="outlined" />
        </div>

        {/* <br />

        <CustomTextField
          variant="outlined"
          id="select"
          placeholder="month"
          onChange={e => setMonth(e.target.value)}
          value={month}
          select
        >
          {["January", "February", "Maret"].map((month, i) => {
            const key = i;
            return (
              <MenuItem key={key} value={month}>
                {month}
              </MenuItem>
            );
          })}
        </CustomTextField> */}
      </Box>
      <Box className={classes.formBox}>
        <Typography variant="caption">
          Silahkan klik Checkot Now untuk melajutkan transaksi
        </Typography>
        <CheckoutButton variant="contained" color="primary">
          Checkout Now
        </CheckoutButton>
      </Box>
    </form>
  );
};

export default CheckoutForm;
