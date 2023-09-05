/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/dashboard.jpg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.3}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 14 }}>
          <Grid container item xs={12} md={9} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
            ¿Cansado de no poder estar presente en tu cultivo en todo momento? 
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              El dispositivo ConfiPlant se conecta a internet a través de Wi-Fi, lo que permite a los usuarios monitorear y controlar sus plantas de forma remota y en tiempo real.
            </MKTypography>
            <br/>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://confiplant.cloud"
              sx={{ mb: 2 }}
            >
              Ir a la aplicacion
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
