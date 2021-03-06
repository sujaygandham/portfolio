import { Box, Link, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import spotlightNoLampLogo from "../../spotlight-no-lamp.svg";
import SocialButton from "../atoms/SocialButton";
import Spotlight from "../atoms/Spotlight";

const HeroSection = () => (
  <Box
    display="flex"
    color="text.black"
    bgImage={`url(${spotlightNoLampLogo})`}
    bgPos="bottom 0px right 0px"
    bgSize={["100%", "100%", "80%", "80%", "0%"]}
    bgRepeat="no-repeat"
    height={[520, 660, 760, 670, 650]}
  >
    <Box p={[8, 10, 80]}>
      <Text fontSize={{ xs: "xl", sm: "4xl", lg: "5xl" }} fontWeight={600}>
        Builds warm and fuzzy UIs
      </Text>
      <Text fontSize={{ xs: "md", md: "2xl" }} fontWeight={500}>
        as a Frontend Engineer + UI Designer
      </Text>
      <Box py={10} maxW={600} lineHeight="1.8">
        <Text fontSize={{ xs: "md", md: "xl" }}>
          A Software Engineer at{" "}
          <Link
            color="secondary.500"
            href="https://blueyonder.com/"
            fontWeight={600}
            isExternal
          >
            BlueYonder
          </Link>
          , who has a deep interest towards web development, design & user
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
    <Box display={{ xs: "none", xl: "flex" }} ml={-48}>
      <Spotlight />
    </Box>
  </Box>
);

export default HeroSection;
