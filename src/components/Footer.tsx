import { Card, Grid, Link, useTheme, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        mt: "5vh",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
              &copy; 2023 Lemon Soju. All rights reserved |{" "}
              <Link href="/policy">개인정보 처리방침</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
              문의사항 및 버그 제보는{" "}
              <Link href="mailto:officialkweb@gmail.com">
                yckk980320@naver.com
              </Link>
            </Typography>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Footer;
