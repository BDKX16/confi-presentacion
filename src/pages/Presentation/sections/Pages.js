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
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
    </Grid>
  ));

  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 2, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="empieza a cultivar"
            container
            sx={{ mb: 3 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Ahorra tiempo y dinero
          </MKTypography>
          <MKTypography variant="body1" color="text">
            La manera mas facil de empezar a cultivar 
            <br /> es con uno de nuestros Confi Stations.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 2, lg: 6 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 1, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
              ¿Listo para simplificar tu vida diaria?
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              ConfiPlant es la mejor opción para cualquier cultivador en cuidades que desee cultivar en departamentos. A diferencia de otros productos en el mercado, nuestro sistema es relativamente low cost debido a que es un servicio basado en la nube.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
