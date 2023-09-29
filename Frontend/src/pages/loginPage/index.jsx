import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";

export const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography 
        style={{ background: "-webkit-linear-gradient(20deg, #2255ef 10%, #c62dde 30%, #d87b41 60%)",
         WebkitBackgroundClip: "text",
         WebkitTextFillColor: "transparent"}}
        fontWeight="bold" 
        fontSize="clamp(1rem, 2rem, 2.25rem)" >
          R-Instagram
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to R-Instagram
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

