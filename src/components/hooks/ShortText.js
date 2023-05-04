import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  Collapse,
} from "@mui/material";
import dc from "../lib/DataConfig";

const ShortText = ({setData, data, available}) => {
  return (
    <Collapse in={available && data.memories !== "" && data.memories !== undefined ? true : false}>
    <div className="shortText-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              {dc.message.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              {dc.message.subtitle} 
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={data.message.length < 5 && data.message.length !== 0}
                helperText={data.message.length < 5 && data.message.length !== 0 ? dc.message.messageError : "" }
                id="outlined-textarea"
                placeholder={dc.message.placeholder}
                multiline
                fullWidth
                onChange={(e) =>
                  setData({ ...data, message: e.target.value })
                }
              />
            </Box>
          </CardContent>
        </Card>
    </div>
    </Collapse>
  );
};

export default ShortText;
