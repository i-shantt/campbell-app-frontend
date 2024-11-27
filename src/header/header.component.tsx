import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Link href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Image
                src="/campbell-logo1.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <Typography variant="h6" sx={{ marginLeft: 1 }}>
                Cambell City Counsil
              </Typography>
            </Box>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
