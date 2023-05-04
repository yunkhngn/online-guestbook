import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
import dc from "../lib/DataConfig";

const NameInput = ({ show, data, setData }) => {
  return (
    <Collapse in={show}>
    <div className="nameInput-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              {dc.nameInput.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              {dc.nameInput.subtitle}
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={data.name.length < 2 && data.name.length !== 0}
                helperText={data.name.length < 2 && data.name.length !== 0 ? dc.nameInput.nameError : "" }
                id="outlined-basic"
                placeholder={dc.nameInput.placeholder}
                variant="outlined"
                fullWidth
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
    </div>
    </Collapse>
  );
};

export default NameInput;
