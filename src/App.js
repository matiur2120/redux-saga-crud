import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import AddItem from './components/AddIteam';
import CSVButton from './components/CSVButton';
import DataTable from './components/DataTable';
import UpdateIteam from "./components/UpdateIteam";

const useStyles = makeStyles({
  appContainer:{
    width: '80%',
    margin: '30px auto'
  },
  tableBottom:{
    marginTop: '30px',
  },
  btnCSV:{
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    background: '#009999',
    borderRadius: '5px',
    marginRight: '10px',
    color: '#fff',
    fontSize: '12px'
  },
  btnADD:{
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    background: '#009933',
    borderRadius: '5px',
 
    color: '#fff',
    fontSize: '12px'
  }

  
})

function App() {

  const [openAddForm, setOpenAddForm] = React.useState(false);
  const [editOpen, setEditOpen] =  React.useState(false);
 
 
  const {
   
    loading,
   
  } = useSelector((state) => ({
    ...state.app,
  }));
  
  const classes = useStyles();
  return (
    <>
    <div className={classes.appContainer}>
      {loading ? <p style={{textAlign: 'center', fontSize: '2rem'}}>Loading.........</p> : null}
      <DataTable open={openAddForm} setOpen={setOpenAddForm} setEditOpen={setEditOpen}/>
      <div className={classes.tableBottom}>
        <CSVButton />
        <button onClick={()=>setOpenAddForm(true)} className={classes.btnADD}>Add Item</button>
     
      </div>
    </div>
    <AddItem open={openAddForm} setOpen={setOpenAddForm} />
    <UpdateIteam open={editOpen} setOpen={setEditOpen} />
    </>
   )}

export default App;
