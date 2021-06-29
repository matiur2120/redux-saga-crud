import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart } from "../redux/user.actions";
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

const AddIteam = ({ open, setOpen}) => {
  const { users, user } = useSelector((state) => ({
    ...state.app,
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const [duplicateEmail, setDuplicatieEmail] = useState(false);

  const formHandler = (data) => {
    let dupArray = [];
    if (users) {
      users.map((item) => {
        if (item.email === data.email) {
          console.log(data.email);
          setDuplicatieEmail(true);
          dupArray.push(item);
        }
      });

      if (dupArray.length === 0) {
        dispatch(
          createUserStart({
            ...data,
          })
        );
        //setDuplicatieEmail(true);
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
              buttonLabel="Add Iteam"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddIteam;
