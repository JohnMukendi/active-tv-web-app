import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { USER_CONTEXT } from "../../context/MainContext";

const Navbar = () => {
  const pages = ["Home", "Shows", "Greenlight", "Merch", "Learn More"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const UserContext = React.useContext(USER_CONTEXT);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logged, setLogged] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        // background: "#111",
        // background:'linear-gradient(to bottom, #131313, #111, #181818)',
        background:'black',
        height: "70px",
        // padding:'10px 0'
      }}
    >
      <Container maxWidth="xl" sx={{ paddingTop:'0px' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {/* <img
              src="https://www.activetvonline.co.za/static/media/logo.718a6dab.png"
              alt=""
              height="70px"
            /> */}
            <Box
              sx={{
                height: "60px",
                width: "70px",
                backgroundImage:
                  'url("https://www.activetvonline.co.za/static/media/logo.718a6dab.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1,paddingTop:0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src="https://www.activetvonline.co.za/static/media/logo.718a6dab.png"
              alt="active-logo"
              height="50px"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              paddingTop: "0px",
              height: "70px",
              // border: "0.1px solid #32a453",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#12171f",
                      borderBottom: "1px solid #12171F",
                    },
                  }}
                >
                  Home
                </Button>
              </a>
            </Link>

            <Link href="/shows">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#32a453",
                      borderBottom: "1px solid #32a453",
                    },
                  }}
                >
                  Shows
                </Button>
              </a>
            </Link>

            <Link href="/produce">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#7AB273",
                      borderBottom: "1px solid #7AB273",
                    },
                  }}
                >
                  {/* Greenlight */}
                  Produce THAT!
                </Button>
              </a>
            </Link>

            <Link href="/merch">
              <a>
                <Button
                  onClick={handleCloseNavMenu}
                  className={"active-tv-font"}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#CCC0BF",
                      borderBottom: "1px solid #CCC0BF",
                    },
                  }}
                >
                  Merch
                </Button>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#7A9EA3",
                      borderBottom: "1px solid #7A9EA3",
                    },
                  }}
                >
                  Learn More
                </Button>
              </a>
            </Link>
          </Box>
          
        {/* coin system below */}
          <Box sx={{ ...coinContainer }}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={16}>
              {"0"}
            </Typography>
            <img src="coin.gif" alt="coin" width={18} height={18} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              src={UserContext.name + UserContext.surname}
              alt="/static/images/avatar/2.jpg"
            />

            {/* {logged ? (
              <Avatar alt={UserContext.name} src="/static/images/avatar/2.jpg" />
            ) : (
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      sx={{
                        mr: 2,
                        color: "#eee",
                        display: "block",
                        fontSize: "16px",
                        width:{
                          lg: "130px",
                          xs:'100%'
                        },
                        "&:hover": {
                          background: "#eee",
                          color: "#111",
                        },
                      }}
                    >
                      Log in
                    </Button>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      variant="outline"
                      sx={{
                        mr: 2,
                        color: "#eee",
                        display: "block",
                        fontSize: "16px",
                        width: {
                          lg:"130px",
                          xs:'100%'
                        },
                        border: "1px solid #eee",
                        "&:hover": {
                          background: "#eee",
                          color: "#111",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </IconButton>
                </Tooltip>
              </Box>
            )} */}

            <Menu
              sx={{
                mt: "45px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ background: "rgba(1,1,1,0.8)", color: "#bd3535" }}
                >
                  <Typography textAlign="center" className={"active-tv-font"}>
                    {setting} 
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

const coinContainer = {
  // border: "1px solid red",
  width: "100px",
  minHeight: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
};
