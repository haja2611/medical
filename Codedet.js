import React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Icon, Box } from "@mui/material";

const Codedet = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <List>
        <ListItemButton onClick={handleClick} sx={{ height: "40px" }}>
          <ListItemText
            className="code-details"
            primary="Code details"
            sx={{ fontFamily: "Verdana,sans-serif" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ height: "100px" }}>
            <div>
              <h6 className="disease">
                A00.0 Cholera due to vibrio choclerae{" "}
                <button className="bill">Billable code</button>
              </h6>
            </div>

            <table>
              <thead>
                <tr>
                  <th style={{ minWidth: "50px" }}>ID</th>
                  <th style={{ minWidth: "150px" }}> DESCRIPTION</th>
                  <th style={{ minWidth: "80px" }}>CLASS</th>
                  <th style={{ minWidth: "50px" }}>SCORE</th>
                  <th style={{ minWidth: "80px" }}> INDEX</th>
                </tr>
              </thead>
              <tbody>
                {global.values && (
                  <tr>
                    <td>{global.values._id}</td>
                    <td>{global.values._source.description}</td>
                    <td>{global.values._source._class}</td>
                    <td>{global.values._score}</td>
                    <td>{global.values._index}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Codedet;
