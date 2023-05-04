import {
  HeadCard,
  NameInput,
  MultipleChoice,
  Form,
  ShortText,
  Submit,
  MusicPlayer,
  Thanks,
  AboutMe,
  Letter,
  Theme,
  WarnBeforeUnload
} from "./components/hooks";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false); //show để show form
  const [available, setAvailable] = useState(true); //available để check xem có thể submit form hay không
  const [showLetter, setShowLetter] = useState(false); //showLetter để show letter
  const [nameError, setNameError] = useState(false);
  const [aboutError, setAboutError] = useState(false);
  const [memoriesError, setMemoriesError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const onDevelopmentEnv = process.env.NODE_ENV === "development";
  const [data, setData] = useState({
    date: "",
    name: "",
    about: "",
    handsome: 40,
    memories: "",
    message: "",
  });
  //check if data is on local storage
  const localData = localStorage.getItem("data");
  useEffect(() => {
    if (localData) {
      setData(JSON.parse(localData));
      setAvailable(false);
    }
  }, [localData]);
  console.clear();
  console.log("Data: ", data);
  console.log("Is on development environment: ", onDevelopmentEnv)
  
  return (
    <Theme>
      <HeadCard show={show}
        setShow={setShow}
        setData={setData}
        available={available}
        showLetter={showLetter}
        setShowLetter={setShowLetter} />
      <MusicPlayer/>
      <Thanks show={show} available={available} data={data} />
      <Letter show={show} data={data} showLetter={showLetter} />
      <NameInput nameError={nameError} show={show} setData={setData} data={data} />
      <AboutMe available={available} aboutError={aboutError} show={show} setData={setData} data={data} />
      <MultipleChoice available={available} show={show} setData={setData} data={data} />
      <Form available={available} memoriesError={memoriesError} show={show} setData={setData} data={data} />
      <ShortText available={available} messageError={messageError} show={show} setData={setData} data={data} />
      <Submit onDevelopmentEnv={onDevelopmentEnv}
        setNameError={setNameError}
        setAboutError={setAboutError}
        setMemoriesError={setMemoriesError}
        setMessageError={setMessageError}
        show={show}
        setShow={setShow}
        setData={setData}
        data={data}
        available={available}
        setAvailable={setAvailable}
        setShowLetter={setShowLetter} />
      <Analytics />
      {(data.name || data.about || data.message || data.memories) && available && <WarnBeforeUnload />}
    </Theme>
  );
}

export default App;
