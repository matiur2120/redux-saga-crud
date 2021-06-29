import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  btnCSV: {
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    background: "#009999",
    borderRadius: "5px",
    marginRight: "10px",
    color: "#fff",
    fontSize: "13px",
    textDecoration: "none",
  },
});

const CSVLinkButton = () => {
  const classes = useStyles();
  const { users } = useSelector((state) => ({
    ...state.app,
  }));
  const headers = [
    { label: "First Name", key: "first" },
    { label: "Last Name", key: "last" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Location", key: "location" },
    { label: "Hobby", key: "hobby" },
  ];
  const csvReport = {
    filename: "Users.csv",
    headers: headers,
    data: users,
  };
  return (
    <CSVLink className={classes.btnCSV} {...csvReport}>
      Dowanload CSV
    </CSVLink>
  );
};

export default CSVLinkButton;
