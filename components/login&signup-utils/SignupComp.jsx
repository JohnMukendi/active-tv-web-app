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

const loginStyles = {
  container: {
    minHeight: "145vh",
    width: "100%",
    background: "url('login-bg.jpg')",
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
      sm: '0 30px',
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
      background: "#fff",
      color: "#000",
    },
  },
  checkboxContainer:{
    display:'flex',
    flexDirection:'column',
    height:"50px",
    justifyContent:'space-between',
    marginTop:'15px',
    padding:{
      md:'0',
      sm:'0 10px',
      xs:'0 20px'
    }

  }
};

const LoginComp = () => {
  const [show, setShow] = useState(false);

// password display
  const tooglePassword = () => {
    setShow(!show);
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <Box sx={{ ...loginStyles.container }}>
      <Box sx={{ ...loginStyles.contentCover }}>
        <Box sx={{ ...loginStyles.formContainer }}>
          <Box sx={{ ...loginStyles.header }}>
            <img
              src="https://www.activetvonline.co.za/static/media/logo.718a6dab.png"
              alt="logo"
              height="175px"
            />
            <Typography
              variant="h4"
              align="center"
              sx={{
                margin: "10px 0",
                fontWeight: "900",
                fontSize: {
                  md: "30px",
                  xs: "20px",
                },
              }}
            >
            Create your account
            </Typography>
            <Typography variant="p" align="center">
            Getting started is easy, just a few steps and you can immerse yourself with   the latest Corridor content!
            </Typography>
          </Box>
          <Box sx={loginStyles.formBox}>
            <form onSubmit={handleSubmit}>
            <Box sx={{ ...loginStyles.inputBlocks }}>
                <label style={{ ...loginStyles.inputLabel }}>
                 Display Name
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                  className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={"text"}
                    placeholder="Enter display name"
                  />
                  <Button>
                    <EmailIcon sx={loginStyles.icon} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label style={{ ...loginStyles.inputLabel }}>
                  Email address
                </label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
                  className="focusInput"
                    style={{ ...loginStyles.inputElement }}
                    type={"text"}
                    placeholder="Enter email address"
                  />
                  <Button>
                    <EmailIcon sx={loginStyles.icon} />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ ...loginStyles.inputBlocks }}>
                <label style={{ ...loginStyles.inputLabel }}>Password</label>
                <Box sx={{ ...loginStyles.input }}>
                  <input
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
       {/* checkboxes */}
              <Box sx={{...loginStyles.checkboxContainer}}>
                <Box sx={{display:'flex'}}>
                 <input style={{padding:'5px'}} type="checkbox"  name="kjeje" />
                 <Typography variant="" sx={{ml:2}}>I have read and accept the Privacy Policy</Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                 <input style={{padding:'5px'}} type="checkbox"  name="kjeje" />
                 <Typography variant="" sx={{ml:2}}>I have read and accept the Terms and Conditions</Typography>
                </Box>
              </Box>
              

              <Box sx={{ ...loginStyles.buttonContainer }}>
                <Button
                  sx={{ ...loginStyles.loginBtn }}
                  variant="contained"
                  color="warning"
                  type="Submit"
                >
                  Sign up
                </Button>
              </Box>
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
                  sx={{ ...loginStyles.socialBtn }}
                  variant="contained"
                  type="Submit"
                >
                  <GoogleIcon sx={{ margin: "0 10px" }} /> Continue with Google
                </Button>
                <Button
                  sx={{ ...loginStyles.socialBtn }}
                  variant="contained"
                  type="Submit"
                >
                  <FacebookIcon sx={{ margin: "0 10px" }} /> Continue with
                  Facebook
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
              sx={{
                fontWeight: "600",
                marginTop: 2,
                fontSize: {
                  md: "14px",
                  sm: "10px",
                  xs: "12px",
                },
              }}
              color="#fff"
              align="center"
            >
             Already have an account? 
              <Box
                sx={{
                  display: "inline-block",
                  margin: "0 5px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href="/login">
                  <a>Login here</a>
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
