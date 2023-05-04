import React from "react";
import { Card, CardContent, Typography, Slider, Box, Collapse } from "@mui/material";
import dc from "../lib/DataConfig";

const MultipleChoice = ({setData, data, available}) => {
  const marks = [
    {
      value: 0,
      label: dc.handsome.label.one,
    },
    {
      value: 40,
      label: dc.handsome.label.fouth,
    },
    {
      value: 70,
      label: dc.handsome.label.sixth,
    },
    {
      value: 100,
      label: dc.handsome.label.full,
    },
  ];
  return (
    <Collapse in={available && data.name !== "" && data.name !== undefined ? true : false}>
    <div className="multipleChoice-container">
      <Card
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6">{dc.handsome.title}</Typography>
          <Typography variant="subtitle2" sx={{ pb: 3 }} color="text.secondary">
            {dc.handsome.subtitle}
          </Typography>
          <Box sx={{ width: { md: '90%' }, pl:3, pr:3 , }}>
            <Slider
              aria-label="Custom marks"
              defaultValue={40}
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e) => setData({...data, handsome: e.target.value})}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
    </Collapse>
  );
};

export default MultipleChoice;
