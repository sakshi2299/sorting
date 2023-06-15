import { Employee } from "./Array_of_object";
import { useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const rows = Employee.map((emp) => createData(emp.id, emp.name, emp.date));
function createData(id, name, date) {
  return { id, name, date };
}

const EmpTable = () => {
  const classes = useStyles();

const [rows, setRows] = useState(Employee);
const sortById=()=>{
    const sorted=[...rows].sort((a,b)=>a.id-b.id)
    setRows(sorted)
}

const sortByName=()=>{
    const sorted=[...rows].sort((a,b)=>a.name.localeCompare(b.name))
    setRows(sorted)
}
const sortByDate = () => {
    const sorted = [...rows].sort((a, b) =>
      moment(a.date,"DD/MM/YYYY hh:mm A").diff(moment(b.date, "DD/MM/YYYY hh:mm A"))
    );
    setRows(sorted);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" color="primary" onClick={sortById}>
        Sort By ID
      </Button>
      <Button variant="outlined" color="primary" onClick={sortByName}>
        Sort By Name
      </Button>
      <Button variant="outlined" color="primary" onClick={sortByDate}>
        Sort By Date
      </Button>
    </>
  );
};
export default EmpTable;
