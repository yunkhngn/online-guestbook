import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Typography,
} from "@mui/material";
import dc from "../lib/DataConfig";

const HeadCard = ({ show, setShow, available, setShowLetter, showLetter }) => {
  return (
    <Card variant="outlined"
      sx={{
        width: "100%",
        // backgroundColor: "defaultBg.default",
      }}
    >
      <div className="headCard-container">
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={dc.headCard.image}
            alt="Letter image"
          />
        </CardActionArea>
        <CardHeader
          title={dc.headCard.title}
          titleTypographyProps={{ variant: "h5" }}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            pl: 3,
            pr: 3,
            pt: 4,
            pb: 3,
          }}
          subheader={dc.headCard.subheader}
          subheaderTypographyProps={{ variant: "subtitle1" }}
        />
        <CardContent
          sx={{ borderBottom: 1, borderColor: "divider", pt: 3, pb: 3 }}
        >
          <Typography variant="body1" sx={{ pl: 1, pr: 1 }}>
            {dc.headCard.content}
            <br/>
            <br/>
            {dc.headCard.content2}
            <br/>
            <br/>
            Mọi người điền cũng được, không điền cũng không sao. Tớ cũng cần chút dữ liệu để xem có chỗ nào bị lỗi k thì feedback lại cho tớ nhé 😺. Tớ cũng rất thích đọc những gì mọi người viết cho tớ. Cảm ơn kikii!
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}>
          <Button size="small" color="primary" onClick={() => setShow(!show)} disabled={!available}>
            {dc.headCard.button1}
          </Button>
          <Button size="small" color="primary" onClick={() => setShow(false) & setShowLetter(!showLetter)} disabled={available}>
            {dc.headCard.button2}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default HeadCard;
