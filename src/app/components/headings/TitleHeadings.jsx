import { Heading, Box } from "@chakra-ui/react";
import React from "react";

function TitleHeadings({ title, mb, size, ms, padding, weight, text_align, color, spacing, bg, clip}) {
  return (
    <Box p={!padding ? "0px" : padding}>
      <Heading
        mb={!mb ? 10 : mb}
        ms={!ms ? "0px" : ms}
        bgGradient={bg}
        bgClip={clip}
        fontSize={size}
        color={color}
        textAlign={text_align}
        letterSpacing={spacing}
        fontWeight={!weight ? "500" : weight}
      >
        {title}
      </Heading>
    </Box>
  );
}

export default TitleHeadings;
