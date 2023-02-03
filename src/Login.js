import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import logo2 from "./images/Solid_lines.png";
import styled from "styled-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const theme = createTheme();

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container2>
        <div
          style={{
            // position: "absolute",
            // left: "50%",
            // background: "#f5f5f5",
            // zIndex: 2,
            paddingTop: 120,
            // backgroundColor: "green",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <Container
            style={{
             position:'relative',
             zIndex:2,
              padding: 40,
              backgroundColor: "white",
              boxShadow:` 0px 0px 4px rgba(0, 0, 0, 0.1)`,
            borderRadius: 12,
              opacity: 10,
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            width="100%"
            component="main"
            maxWidth="xs"
          >
            <CssBaseline />
            <Box
              sx={{
                // marginTop: 8,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                // zIndex: 10,
                zIndex:2,
                // backgroundColor: "red",
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
              <img src={logo2} />
              {/* </Avatar> */}
              <Typography style={{ zIndex: 10 }} component="h1" variant="h5">
                Sign in to your account
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 5 }}
                style={{ zIndex: 10 }}
              >
                <FormHelperText
                  style={{ zIndex: 10, color: " #545454" }}
                  id="email"
                >
                  Email/username
                </FormHelperText>
                <Typography></Typography>
                <TextField
                  margin="normal"
                  required
                  style={{ zIndex: 10, marginTop: 5, marginBottom: "1rem" }}
                  fullWidth
                  id="email"
                  // label="Email Address"
                  size="small"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <FormHelperText
                  style={{ zIndex: 10, color: " #545454" }}
                  id="password"
                >
                  Password
                </FormHelperText>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  size="small"
                  style={{ zIndex: 10, marginTop: 5 }}
                  // label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  id="password"
                  autoComplete="current-password"
                />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Container>

          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{marginTop:'2rem'}}
          >
            <Grid item xs style={{zIndex:3}}>
              <Typography
                variant="body2"
                style={{ color: " #545454" ,zIndex:1}}
              ></Typography>{" "}
              New here? <a href="/">Create an account</a>
            </Grid>
            <Grid item style={{zIndex:3}}>
              <Typography
                variant="body2"
                style={{ color: " #545454", marginTop: "0.6em",zIndex:1 }}
              >
                {"Terms of use | Privacy policy"}
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="rect380">
          <div className="rect381"></div>
          <div className="rect382"></div>
        </div>
      </Container2>
    </ThemeProvider>
  );
}

const Container2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  overflow: hidden;

  .rect380 {
    position: absolute;
    width: 1752.96px;
    height: 392.25px;
    left: -117.75px;
    top: 200px;
    z-index: 1;
    /* Whites/Gray Shade */
    background: #f0f0f0;
    /* background-color: gray; */
    opacity: 0.45;
    transform: rotate(-30deg);
    .rect381 {
      /* Rectangle 381 */
      position: absolute;
      width: 769.01px;
      height: 13.44px;
      z-index:1;
      top: -13px;
      /* left: -124.11px;
      top: 696.09px; */
      /* Whites/Primary High Shade
Used for navbar highlight
*/
      background: #e0e8fc;
      /* transform: rotate(-30deg); */
    }
    .rect382 {
      position: absolute;
      width: 769.01px;
      height: 13.44px;
      z-index: 1;
      bottom: -13px;
      right: 0px;
      /* left: 792px;
      top: 636.51px; */
      /* Primary/Product Primary */
      background: #3766e8;
      opacity: 0.2;
      /* transform: rotate(-30deg); */
    }
  }
`;
