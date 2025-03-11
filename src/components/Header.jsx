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
import {
  FacebookOutlined,
  Instagram,
  LanguageOutlined,
  Telegram,
} from "@mui/icons-material";
import { deepWater, sea } from "./constants";
import { ReactComponent as Icon } from "./icon.svg";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";


function Header() {
  const handleClickScrollWorks = () => {
    const element1 = document.getElementById("Works");
    if (element1) {
      // 👇 Will scroll smoothly to the top of the next section
      element1.scrollIntoView({ behavior: "smooth" });
    }
    const element5 = document.getElementById("Works1");
    if (element5) {
      // 👇 Will scroll smoothly to the top of the next section
      element5.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollContact = () => {
    const element3 = document.getElementById("Contact");
    if (element3) {
      // 👇 Will scroll smoothly to the top of the next section
      element3.scrollIntoView({ behavior: "smooth" });
    }
    const element4 = document.getElementById("Contact1");
    if (element4) {
      // 👇 Will scroll smoothly to the top of the next section
      element4.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollAbout = () => {
    const element2 = document.getElementById("About");
    if (element2) {
      // 👇 Will scroll smoothly to the top of the next section
      element2.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { t } = useTranslation();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [refresh, setRefresh] = React.useState(0);
  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "ua",
      name: "Українська",
    },
  ];
  const currentLanguageCode = Cookies.get("i18next") || "en";

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
      style={{
        background: [deepWater],
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Icon style={{ height: "2.5rem", width: "auto" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              <MenuItem fontFamily="Nunito" onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  fontFamily="Nunito"
                  onClick={handleClickScrollWorks}
                >
                  {t("Works")}
                </Typography>
              </MenuItem>
              <MenuItem fontFamily="Nunito" onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  fontFamily="Nunito"
                  onClick={handleClickScrollAbout}
                >
                  {t("About")}
                </Typography>
              </MenuItem>
              <MenuItem fontFamily="Nunito" onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  fontFamily="Nunito"
                  onClick={handleClickScrollContact}
                >
                  {t("Contact")}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleClickScrollWorks}
              sx={{
                my: 2,
                color: [sea],
                display: "block",
                fontFamily: "Nunito",
              }}
            >
              {t("Works")}
            </Button>
            <Button
              onClick={handleClickScrollAbout}
              sx={{
                my: 2,
                color: [sea],
                display: "block",
                fontFamily: "Nunito",
              }}
            >
              {t("About")}
            </Button>
            <Button
              onClick={handleClickScrollContact}
              sx={{
                my: 2,
                color: [sea],
                display: "block",
                fontFamily: "Nunito",
              }}
            >
              {t("Contact")}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                sx={{ p: 0, marginLeft: "10px" }}
                href="https://www.instagram.com/smartrun.volunteers/"
                target="_blank"
              >
                <Instagram sx={{ fontSize: "60", color: [sea] }} />
              </IconButton>
              <IconButton
                sx={{ p: 0, marginLeft: "10px" }}
                href="https://t.me/smart_volunteers"
                target="_blank"
              >
                <Telegram sx={{ fontSize: "60", color: [sea] }} />
              </IconButton>
              <IconButton
                sx={{ p: 0, marginLeft: "10px" }}
                href="https://www.facebook.com/groups/1293506701339641"
                target="_blank"
              >
                <FacebookOutlined sx={{ fontSize: "60", color: [sea] }} />
              </IconButton>
            </Tooltip>
            <Tooltip title={t("language")} sx={{ p: 0 }}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, marginLeft: "30px" }}
              >
                <LanguageOutlined sx={{ fontSize: "30px", color: [sea] }} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
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
              {languages.map(({ code, name }) => (
                <MenuItem key={name} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      i18next.changeLanguage(code);
                      setRefresh(refresh + 1);
                    }}
                    style={{
                      opacity: currentLanguageCode === code ? 0.5 : 1,
                      color: [deepWater],
                      fontFamily: "Nunito",
                      disabled: currentLanguageCode === code,
                    }}
                  >
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
