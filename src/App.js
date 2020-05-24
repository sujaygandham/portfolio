import { Box, CSSReset, Link, Stack, Text, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import "./App.css";
import SocialButton from "./components/molecules/SocialButton";
import Navbar from "./components/Navbar";
import spotlightNoLampLogo from "./spotlight-no-lamp.svg";
import spotlightLogo from "./spotlight.svg";
import designTheme from "./themes/designer-theme";

function App() {
  return (
    <ThemeProvider theme={designTheme}>
      <CSSReset />
      <Box className="App">
        <Navbar />
        <Box
          bgImage={{
            lg: `url(${spotlightNoLampLogo})`,
            xl: `url(${spotlightLogo})`,
          }}
          bgPos="top 2px right 0px"
          bgSize={["0%", "0%", "0%", "0%", "60%"]}
          bgRepeat="no-repeat"
          height="80vh"
        >
          <Box
            p={[8, 16, 80]}
            color="primary.500"
            bgImage={`url(${spotlightNoLampLogo})`}
            bgPos="bottom 0px right 0px"
            bgSize={["100%", "100%", "80%", "80%", "0%"]}
            bgRepeat="no-repeat"
            height={[600, 760, 760, 700, 700]}
          >
            <Text fontSize={{ xs:"2xl", sm: "4xl", lg: "6xl"}} fontWeight={600}>
              Builds warm and fuzzy UIs
            </Text>
            <Text fontSize={{ xs:"xl", md: "2xl"}} fontWeight={500}>
              as a Frontend Engineer + UI Designer
            </Text>
            <Box py={10} maxW={600} lineHeight="1.8">
              <Text fontSize={{ xs:"lg", md: "xl"}}>
                A Software Engineer at{" "}
                <Link
                  color="secondary.300"
                  href="https://blueyonder.com/"
                  isExternal
                >
                  Blue Yonder
                </Link>
                , who has deep interest towards web development, design & user
                experience based in{" "}
                <Text as="span" fontWeight={600}>
                  Texas
                </Text>
                .
              </Text>
            </Box>
            <Stack isInline spacing={4} alignItems="center">
              <SocialButton
                icon={FaMediumM}
                label="Medium"
                externalLink="https://medium.com/@sujay.gandham"
              />
              <SocialButton
                icon={FaLinkedinIn}
                label="LinkedIn"
                externalLink="https://linkedin.com/in/sujay-gandham-789913152"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
