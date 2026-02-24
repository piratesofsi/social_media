import { Box } from "@mui/system";
import {
  Button,
  Container,
  Stack,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../Copyright";

const SignupConsentView = () => {
  const navigate = useNavigate();
  const consentKey = "signupConsent18";

  useEffect(() => {
    if (localStorage.getItem(consentKey) === "true") {
      navigate("/signup");
    }
  }, [navigate]);

  const handleConfirm = () => {
    localStorage.setItem(consentKey, "true");
    navigate("/signup");
  };

  const handleDecline = () => {
    localStorage.removeItem(consentKey);
    navigate("/");
  };

  return (
    <Container maxWidth={"xs"} sx={{ mt: { xs: 2, md: 6 } }}>
      <Stack alignItems="center">
        <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
          <Link to="/" color="inherit" underline="none">
            PostIt
          </Link>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Are You 18 Or Older?
        </Typography>
        <Typography color="text.secondary" align="center" sx={{ mb: 2 }}>
          You must be at least 18 years old to sign up for PostIt.
        </Typography>
        <Alert severity="warning" sx={{ width: "100%", mb: 2 }}>
          Please confirm your age to continue.
        </Alert>
        <Box sx={{ width: "100%" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 1 }}
            onClick={handleConfirm}
          >
            Yes, I am 18+
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="inherit"
            onClick={handleDecline}
          >
            No, I am under 18
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Copyright />
        </Box>
      </Stack>
    </Container>
  );
};

export default SignupConsentView;
