import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserStart,
  loadUserStart,
  setEditUser,
} from "../redux/user.actions";
const tableHead = [
  "Id",
  "First",
  "Last",
  "Email",
  "Phone",
  "Location",
  "Hobby",
  "Action",
];
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: "100px",
  },
  btnEdit: {
    border: "none",
    color: "#fff",
    background: "#ff9900",
    cursor: "pointer",
    borderRadius: "4px",
    padding: "3px 6px",
    fontSize: "12px",
    margin: "0 2px",
  },
  btnDel: {
    border: "none",
    background: "#b30000",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
    padding: "3px 6px",
    fontSize: "12px",
    margin: "0 2px",
  },
});

const DataTable = ({ setEditOpen }) => {
  const { users, user, deleteUser, updateUser } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    loadTasks();
  }, [user, deleteUser, updateUser]);
  const loadTasks = () => {
    dispatch(loadUserStart());
  };

  const hadleClick = async (editId) => {
    const iteam = users.filter((user) => user._id === editId);
    await dispatch(setEditUser(iteam[0]));
    setEditOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableHead.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow key={row._id}>
              <TableCell component='th' scope='row'>
                {index + 1}
              </TableCell>
              <TableCell align='left'>{row.first}</TableCell>
              <TableCell align='left'>{row.last}</TableCell>
              <TableCell align='left'>{row.email}</TableCell>
              <TableCell align='left'>{row.phone}</TableCell>
              <TableCell align='left'>{row.location}</TableCell>
              <TableCell align='left'>{row.hobby}</TableCell>

              <TableCell align='left'>
                <button
                  className={classes.btnEdit}
                  // onClick={() => setOpen(true)}
                  onClick={() => hadleClick(row._id)}
                >
                  Edit
                </button>
                <button
                  className={classes.btnDel}
                  onClick={() => dispatch(deleteUserStart({ _id: row._id }))}
                >
                  Del
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
