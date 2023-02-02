import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine";
import Theme from "./Theme";
import logou from "./images/logomain.png";
import backg from "./images/Background.png";
function App() {
  return (
    <div
      style={{
        // backgroundImage: `url(${backg})`,
        // backgroundColor : 'green',
        // color : 'white',
        // height : '60vh',
        //  width:'30em',
        height: "100vh",
        background: "#f5f5f5",
        zIndex: 10,
        // overflow: 'hidden',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 160,
          height: 35.42,
          position: " absolute",
          zIndex:20,
          top: 60,
          left: 100,
        }}
      >
        <img src={logou} alt="" style={{ height: "100%" }} />
      </div>
      <Login />
    </div>
  );
}

export default App;
