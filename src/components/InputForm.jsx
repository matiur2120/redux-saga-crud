import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  inputText: {
    width: "100%",
    height: "30px",
    padding: "0 5px",
  },
  MuiFormControlRoot: {
    width: "100%",
  },
  textFieldConatiner: {
    marginBottom: "15px",
    position: "relative",
    width: "100%",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "14px 0",
  },
  addBtn: {
    width: "100%",
    padding: "6px",
    cursor: "pointer",
    background: "#009933",
    outline: "none",
    borderRadius: "6px",
    border: "none",
  },
  errorText: {
    position: "absolute",
    fontSize: "12px",
    color: "red",
    marginTop: "1px",
  },
  inputBox: {
    width: "100%",
  },
}));

const InputForm = ({ formHandler, duplicateEmail, buttonLabel }) => {
  const { editUser } = useSelector((state) => ({
    ...state.app,
  }));
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...editUser,
    },
  });

  return (
    <form
      className={classes.root}
      autoComplete='off'
      onSubmit={handleSubmit(formHandler)}
    >
      <div>
        <div className={classes.textFieldConatiner}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='First Name*'
                className={classes.inputBox}
              />
            )}
            rules={{ required: "First name is required!" }}
            name='first'
            control={control}
            className={classes.inputText}
          />
          {errors?.first && (
            <p className={classes.errorText}>{errors.first.message}</p>
          )}
        </div>
        <div className={classes.textFieldConatiner}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Last Name*'
                className={classes.inputBox}
              />
            )}
            rules={{ required: "Last name is required!" }}
            name='last'
            control={control}
            className={classes.inputText}
          />
          {errors?.last && (
            <p className={classes.errorText}>{errors.last.message}</p>
          )}
        </div>
        <div className={classes.textFieldConatiner}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Email*'
                className={classes.inputBox}
                type='email'
              />
            )}
            rules={{ required: "Email is required!" }}
            name='email'
            control={control}
            className={classes.inputText}
          />
          {errors?.email && (
            <p className={classes.errorText}>{errors.email.message}</p>
          )}
          {duplicateEmail && (
            <p className={classes.errorText}>Email is already exists!</p>
          )}
        </div>

        <div className={classes.textFieldConatiner}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Phone'
                className={classes.inputBox}
              />
            )}
            name='phone'
            control={control}
            className={classes.inputText}
          />
        </div>
        <div className={classes.textFieldConatiner}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='location'
                className={classes.inputBox}
              />
            )}
            name='location'
            control={control}
            className={classes.inputText}
          />
        </div>
        <div className={classes.textFieldConatiner}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Hobby'
                className={classes.inputBox}
              />
            )}
            name='hobby'
            control={control}
            className={classes.inputText}
          />
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.addBtn} type='submit'>
            {buttonLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
