import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import TabPanel from "./openTab";
import Codedet from "./Codedet";

const Table = () => {
  return (
    <Box className="Table-box">
      <div className="tab-head">Tabular Search</div>

      <TabPanel />
    </Box>
  );
};
export default Table;
