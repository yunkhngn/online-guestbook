import {React, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Nhac from "./nhac.mp3";
import {Button, CardActionArea } from '@mui/material'

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => { setPlaying(!playing); };

  const replay = () => {
    audio.currentTime = 0;
    setPlaying(true);
  };

  useEffect(() => {
    audio.volume = 0.7;
    playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle, replay,];
};

const MusicPlayer = () => {
  const [playing, toggle, replay] = useAudio(Nhac);
  return (
    <div className="music-container">
      <Card variant="outlined" sx={{ display: {md:"flex", sm:"block"}, p:2, justifyContent:"left" }}>
      <CardActionArea
      sx={{ width: {md:"250px",xs:"100%"}, borderRadius: 1 , aspectRatio:"1/1"}}
      >
      <CardMedia
          component="img"
          sx={{ width: {md:"250px",xs:"100%"}, borderRadius: 1 , aspectRatio:"1/1"}}
          image="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
          alt="Ngọt"
        />
        </CardActionArea>
        <Box sx={{ml:{md:'1em'}, mt:{xs:'1em'}, display: "flex", flexDirection: "column" , justifyContent:"center", alignItems:"center", width:'100%'}}>
          <CardContent sx={{width:'95%', justifyContent:"center", alignItems:"center"}}>
            <Typography component="div" variant="h5">
              Cá hồi (Hoang)
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Ngọt band
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{mt:'1em'}}
              component="div"
            >
              Thay nhạc của cậu vào đây này
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: {md:1, xs:0}, pb: 1}}>
            <Button onClick={toggle}>
              {playing ? "Pause" : "Play"}
            </Button>
            <Button sx={{ml:'1em'}} onClick={replay}>
              Replay
            </Button>
            <Button sx={{ml:'1em'}} variant="outlined" color="success" onClick={() => {window.open("play list của cậu", "_blank")}}>
              Playlist
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default MusicPlayer;
