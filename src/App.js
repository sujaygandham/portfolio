import { Box, CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import Navbar from "./components/organisms/Navbar";
import designTheme from "./themes/designer-theme";
import HeroSection from "./components/sections/HeroSection";
import Headroom from 'react-headroom';

function App() {
  return (
    <ThemeProvider theme={designTheme}>
      <CSSReset />
      <Box backgroundColor="background.light" height="100vh">
        <Headroom>
          <Navbar />
        </Headroom>
        <HeroSection />
      </Box>
    </ThemeProvider>
  );
}

export default App;
