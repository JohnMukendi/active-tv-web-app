import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import useRouter from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { handleBreakpoints } from "@mui/system";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import Router from "next/router";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Hub, Logger } from "aws-amplify";

const LoginComp = () => {
  const [show, setShow] = useState(false);
  const [errorLogs, setErrorLogs] = useState("");

  //hub details
  // Hub.listen('auth', (data) => {
  //   const { payload } = data;
  //   this.onAuthEvent(payload);
  //   console.log('hub says => A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);

  Hub.listen("auth", (data, event) => {
    switch (data.payload.event) {
      case "signIn":
        console.log("user signed in " + event);
        break;
      case "signUp":
        console.log("user signed up " + event);
        break;
      case "signOut":
        console.log("user signed out " + event);
        break;
      case "signIn_failure":
        console.log("hub=>log: user sign in failed " + event);
        console.log(data.payload.event + " my log");
        break;
      case "configured":
        console.log("the Auth module is configured " + event);
    }
  });
  // })

  // const logger = new Logger('My-Logger');

  // const listener = (data) => {

  //     switch (data.payload.event) {
  //         case 'signIn':
  //             logger.info('user signed in');
  //             break;
  //         case 'signUp':
  //             logger.info('user signed up');
  //             break;
  //         case 'signOut':
  //             logger.info('user signed out');
  //             break;
  //         case 'signIn_failure':
  //             logger.error('user sign in failed');
  //             break;
  //         case 'tokenRefresh':
  //             logger.info('token refresh succeeded');
  //             break;
  //         case 'tokenRefresh_failure':
  //             logger.error('token refresh failed');
  //             break;
  //         case 'autoSignIn':
  //             logger.info('Auto Sign In after Sign Up succeeded');
  //             break;
  //         case 'autoSignIn_failure':
  //             logger.error('Auto Sign In after Sign Up failed');
  //             break;
  //         case 'configured':
  //             logger.info('the Auth module is configured');
  //     }
  // }

  // Hub.listen('auth', listener);
  // console.log('hub module =>', Hub)

  // form state
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
    check: "",
  });

  const handleFieldChange = (event) => {
    const field = event.currentTarget.name; //created an object that gets the name of inputs and store its value

    setFormDetails({
      ...formDetails,
      [field]: event.currentTarget.value,
    });
  };

  const tooglePassword = () => {
    setShow(!show);
  };

  const GoogleSignin = async () => {
    try {
     await Auth.federatedSignIn({ provider: "Google" });
     console.log('using Google for federation')

    } catch (err) {
      console.log(`Google auth returns ${err.message}`);
    }
  };
  const FacebookSignin = async () => {
    try {
     await Auth.federatedSignIn({ provider: "Facebook" });
     console.log('using facebook for federation')
    } catch (err) {
      console.log(`Facebook auth returns ${err.message}`);
    }
  };

  async function signIn(username, password) {
    console.log("username-logs", username);
    console.log("password-logs", password);

    try {
      await Auth.signIn(username, password);
      Router.push("/");
    } catch (error) {
      console.log("error signing in ", error);
      setErrorLogs(error.message);
    }
  }

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formDetails.email, formDetails.password);
  };

  return (
    <Box sx={{ ...loginStyles.container }}>
      <Box sx={{ ...loginStyles.contentCover }}>
        <Box sx={{ ...loginStyles.formContainer }}>
          <Box sx={{ ...loginStyles.header }}>
            <img
              src="glitch-tv.gif"
              alt="logo"
              height="105px"
              style={{ marginBottom: "5" }}
            />

            <Typography
              className={"active-tv-font"}
              variant="h4"
              align="center"
              sx={{
                margin: "15px 0",
                fontWeight: "900",
                fontSize: {
                  md: "20px",
                  xs: "20px",
                },
              }}
            >
              Welcome Back To Active TV
            </Typography>
            <Typography fontSize={10} className={"active-tv-font"} variant="p">
              Jump back in with the latest Active TV content!
            </Typography>
          </Box>
          <Box sx={loginStyles.formBox}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel }}
                >
                  Email address
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                    name="email"
                    value={formDetails.email}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={"email"}
                    placeholder="Enter email address"
                  />
                  <Button>
                    <EmailIcon sx={loginStyles.icon} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label
                  className="active-tv-font"
                  style={{ ...loginStyles.inputLabel }}
                >
                  Password
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                    name="password"
                    value={formDetails.password}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <Button onClick={tooglePassword}>
                    {show ? (
                      <VisibilityIcon sx={loginStyles.icon} />
                    ) : (
                      <VisibilityOffIcon sx={loginStyles.icon} />
                    )}
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...loginStyles.buttonContainer }}>
                <Button
                  sx={{ ...loginStyles.loginBtn }}
                  variant="contained"
                  className={"active-tv-font"}
                  color="warning"
                  type="Submit"
                >
                  Login
                </Button>
              </Box>
              <span
                className="active-tv-font"
                style={{
                  color: "red",
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  fontSize: 10,
                }}
              >
                {errorLogs}
              </span>
              <Box sx={{ padding: "0 50px" }}>
                <fieldset style={{ ...loginStyles.fieldset }}>
                  <legend style={{ ...loginStyles.legend }}>OR</legend>
                </fieldset>
              </Box>
              {/* login with socials */}
              <Box
                sx={{
                  ...loginStyles.buttonContainer,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: {
                    md: "120px",
                    sm: "140px",
                    xs: "170px",
                  },
                }}
              >
                <Button
                  onClick={() => {
                    GoogleSignin();
                    // Auth.federatedSignIn({provider:CognitoHostedUIIdentityProvider.Google})
                    // Auth.federatedSignIn({ provider: "Google" });
                  }}
                  sx={{ ...loginStyles.socialBtn }}
                  variant="contained"
                  className={"active-tv-font"}
                  type="Submit"
                >
                  <GoogleIcon sx={{ margin: "0 10px" }} /> Continue with Google
                </Button>
                <Button
                  sx={{
                    ...loginStyles.socialBtn,
                    "&:hover": { background: "blue", border: "none" },
                  }}
                  variant="contained"
                  className={"active-tv-font"}
                  onClick={() => {
                    FacebookSignin();
                    // Auth.federatedSignIn({provider:CognitoHostedUIIdentityProvider.Facebook})
                    // Auth.federatedSignIn({ provider: "Facebook" });
                  }}
                >
                  <FacebookIcon sx={{ margin: "0 10px" }} />
                  Continue with Facebook
                </Button>
              </Box>
            </form>
          </Box>
          <Box
            sx={{
              padding: "20px",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              className={"active-tv-font"}
              sx={{
                fontWeight: "600",
                marginTop: 2,
                fontSize: {
                  md: "12px",
                  sm: "11px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
            >
              By logging in you accept the Terms and Conditions and Privacy
              Policy
            </Typography>

            <Typography
              variant="600"
              className={"active-tv-font"}
              sx={{
                fontWeight: "bolder",
                marginTop: 2,
                fontSize: {
                  md: "10px",
                  sm: "11px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
            >
              Forgot your password?
              <Box
                sx={{
                  display: "inline-block",
                  margin: "0 5px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href="https://ww.google.com">
                  <a href="/lostPassword">Forgotten password</a>
                </Link>
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                marginTop: 2,
                fontSize: {
                  md: "10px",
                  sm: "10px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
              className={"active-tv-font"}
            >
              Don`t have an account?
              <Box
                sx={{
                  display: "inline-block",
                  margin: "0 5px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href="/signup">
                  <a>Signup here</a>
                </Link>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComp;

const loginStyles = {
  container: {
    minHeight: "125vh",
    width: "100%",
    background: "url('active-tv-login-test1.png')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      md: 0,
      sm: 0,
      xs: 0,
    },
  },
  contentCover: {
    minHeight: {
      lg: "894px",
      md: "894px",
      sm: "900px",
      xs: "900px",
    },
    width: "1140px",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      lg: 0,
      md: 0,
      sm: "0 45px",
      xs: 0,
    },
  },
  formContainer: {
    // border: "1px solid red",
    height: "100%",
    width: {
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
    padding: {
      md: 0,
      sm: 0,
      xs: 0,
    },
  },
  header: {
    //  border:'1px solid blue',
    minHeight: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    flexDirection: "column",
    padding: "20px 0",
  },
  formBox: {
    minHeight: "400px",
    padding: {
      lg: 0,
      md: 0,
      sm: "0px",
      xs: "0px",
    },
    // border: "1px solid yellow",
    // padding: "20px 0",
    color: "white",
  },
  input: {
    width: "100%",
    height: "50px",
    // padding: " 0 5px",
    fontSize: "15px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
  },
  inputLabel: {
    color: "#fff",
    width: "100%",
    padding: 10,
    fontWeight: "bold",
    fontSize: 10,
  },
  inputBlocks: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // border:'1px solid red',
    padding: {
      md: "5px 0",
      sm: " 5px 10px",
      xs: "10px 25px",
    },
  },
  icon: {
    color: "#666",
  },
  inputElement: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
    border: "none",
    padding: "0 15px",
    fontSize: "15px",
    fontWeight: "",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid blue",
    height: "100px",

    padding: {
      md: "1px 0",
      sm: "10px",
      xs: "20px",
    },
  },
  loginBtn: {
    width: "100%",
    height: "50px",
    background: "#fff203",
    color: "#000",
    fontWeight: "bolder",
    "&:hover": {
      background: "#fff203",
    },
  },
  fieldset: {
    border: "none",
    borderTop: "1px solid #f2f2f2",
    // border:'4px 0  2px 1px solid grey',
  },
  legend: {
    margin: "0 auto",
    borderRadius: "100%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  socialBtn: {
    width: "100%",
    height: "50px",
    background: "transparent",
    border: "1px solid white",
    color: "#fff",
    fontWeight: "bolder",
    "&:hover": {
      border: "none",
      background: "#ff0000",
      color: "#fff",
    },
  },
};
