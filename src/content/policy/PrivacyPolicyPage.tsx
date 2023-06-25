import { Box, Card, Container, Typography } from "@mui/material";

import React from "react";
import { PrivacyPolicy } from "../../assets/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <Box
      paddingTop={2}
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "110%",
          backgroundImage: "url(/background.jpg)",
          opacity: 0.6,
          zIndex: -1,
          backgroundSize: "cover",
        },
        mt: "8vh",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          color="primary"
          align="center"
          sx={{ m: "4vh" }}
        >
          개인정보 처리방침
        </Typography>
        <Card>
          <Box
            sx={{
              height: "60vh",
              overflowY: "scroll",
              padding: "2rem",
            }}
          >
            <PrivacyPolicy />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
