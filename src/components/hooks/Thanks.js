import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Collapse,
  Typography,
} from "@mui/material";

const Thanks = ({ show, data, available }) => {
  // https://wallpapers.com/images/featured/vmdj9lfm2un8rji3.jpg 
  return (
    <Collapse in={!show & !available}>
      <div className="thanks-container">
        <Card
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
            <CardContent
                sx={{pt: 3, pb: 3, borderBottom: 1, borderColor: "divider" }}
            >
                <Typography variant="body1" sx={{ pl: 1, pr: 1, fontStyle:"italic" }}>
                  Cảm ơn {data.name} đã gửi thư cho tớ, chắc là tớ sẽ đọc sớm thôi. Thư gửi tớ k biết có đến tay tớ hay không nhưng mà chắc là có đó 🍭 Nếu hong đến được thì chúng ta có thể nói chuyện nhaaa. 😺
                </Typography>
            </CardContent>
            <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="https://i.imgur.com/322Q2XF.jpg"
              alt="Tớ ngồi code sml"
            />
          </CardActionArea>
            <CardActions sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}>
                <Button size="small" color="primary" onClick={() => {window.open("https://m.me/yun.khngn", "_blank")}}>
                Direct của tớ
              </Button>
              <Button size="small" color="primary" onClick={() => {window.open("https://open.spotify.com/playlist/7toU7okc85X0gVDEOWcWYi?si=fcb559ec8603406c", "_blank")}}>
                Playlist của tớ nè
              </Button>
            </CardActions>
        </Card>
      </div>
    </Collapse>
  );
};

export default Thanks;
