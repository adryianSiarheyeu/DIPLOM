import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

function createData(orderNumber, date, price) {
  return { orderNumber, date, price };
}

const rows = [
  createData("1asdad123", "01.01.2020", 2500),
  createData("1ada13212", "01.01.2020", 2500),
  createData("1ddfdfwwwqe", "01.01.2020", 2500),
  createData("1123123asd", "01.01.2020", 2500),
  createData("1baabaeg", "01.01.2020", 2500),
];

const OrdersList = ({}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер заказа</TableCell>
            <TableCell align="center">Дата заказа</TableCell>
            <TableCell align="right">Сумма заказа(BYN)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.orderNumber}>
              <TableCell component="th" scope="row">
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      {row.orderNumber}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>Какая-то инфа о заказе</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {/*<TableCell align="right">{row.carbs}</TableCell>*/}
              {/*<TableCell align="right">{row.protein}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

OrdersList.propTypes = {};

export default React.memo(OrdersList);
