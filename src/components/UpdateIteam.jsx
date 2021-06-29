import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserStart } from "../redux/user.actions";
import InputForm from "./InputForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "300px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UpdateIteam = ({ open, setOpen }) => {
  const { users, editUser } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  const [duplicateEmail, setDuplicatieEmail] = useState(false);

  const classes = useStyles();
  const formHandler = (data) => {
    const checkDuplicatie = users.filter((user) => user._id !== editUser._id);
    let dupArray = [];
    if (checkDuplicatie) {
      checkDuplicatie.map((item) => {
        if (item.email === data.email) {
          console.log(data.email);
          setDuplicatieEmail(true);
          dupArray.push(item);
        }
      });

      if (dupArray.length === 0) {
        dispatch(
          updateUserStart({
            _id: editUser._id,
            ...data,
          })
        );
        setOpen(false);
      }
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={() => setOpen((prev) => !prev)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <InputForm
              open={open}
              setOpen={setOpen}
              formHandler={formHandler}
              duplicateEmail={duplicateEmail}
              buttonLabel="Update Iteam"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default UpdateIteam;
