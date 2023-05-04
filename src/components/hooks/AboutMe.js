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

const AboutMe = ({data, setData, available }) => {
  return (
    <Collapse in={available && data.name !== "" && data.name !== undefined ? true : false}>
      <div className="AboutMe-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">{dc.aboutMe.title}</Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              {dc.aboutMe.subtitle}
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={data.about.length < 5 && data.about.length !== 0}
                helperText={data.about.length < 5 && data.about.length !== 0 ? dc.aboutMe.aboutError : "" }
                id="outlined-basic"
                placeholder={dc.aboutMe.placeholder}
                variant="outlined"
                fullWidth
                onChange={(e) => setData({ ...data, about: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
      </div>
    </Collapse >
  );
};

export default AboutMe;
