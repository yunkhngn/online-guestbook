import { useEffect } from "react";

const WarnBeforeUnload = () => {
  useEffect(() => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", listener);

    return () => {
      window.removeEventListener("beforeunload", listener);
    };
  }, []);

  return null;
};

export default WarnBeforeUnload;