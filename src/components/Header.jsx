import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FacebookOutlined, Instagram, Telegram } from "@mui/icons-material";
import { sea } from "./constants";
import {ReactComponent as Icon} from "./icon.svg"


const pages = ["Works", "About", "Contact"];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(120deg, #0a2f47 0%, #0f3a54 40%, #145d7a 100%)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={sea}
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
                  <Typography textAlign="center" fontFamily="Nunito">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Icon
            className="soft-float"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            style={{ height: "3rem", width: "auto" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: [sea],
              textDecoration: "none",
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: [sea],
                  display: "block",
                  fontFamily: "Nunito",
                  fontSize: "1rem",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.8,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                sx={{
                  p: 0,
                  marginLeft: "10px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.08)" },
                }}
                href="https://www.instagram.com/_vovk.mark_/"
              >
                <Instagram sx={{ fontSize: { xs: 28, md: 36 }, color: [sea] }} />
              </IconButton>
              <IconButton
                sx={{
                  p: 0,
                  marginLeft: "10px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.08)" },
                }}
              >
                <Telegram sx={{ fontSize: { xs: 28, md: 36 }, color: [sea] }} />
              </IconButton>
              <IconButton
                sx={{
                  p: 0,
                  marginLeft: "10px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.08)" },
                }}
              >
                <FacebookOutlined sx={{ fontSize: { xs: 28, md: 36 }, color: [sea] }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
