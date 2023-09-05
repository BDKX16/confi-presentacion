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


// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.png";
import bgBack from "assets/images/rotating-card-bg-back.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Confi
                    <br />
                    Station
                  </>
                }
                description="ConfiPlant es un sistema de control de ambientes aislados diseñado para optimizar el cultivo de interior. Nuestro dispositivo es fácil de instalar y ofrece numerosas características para hacer tu experiencia de cultivo una tarea más fácil y agradable."
              />
              <RotatingCardBack
                image={bgBack}
                title={<>
                    ¿Listo para simplificar 
                    <br />
                    tu vida diaria?
                  </>}
                description="Reserva tu dispositivo ConfiPlant hoy mismo y obtén soporte técnico en tiempo real. ¡Compra ahora y recíbelo en casa!"
                action={{
                  type: "internal",
                  route: "https://www.instagram.com/confi.plant/",  //co to checkout
                  label: "proba confi kit v1",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="router"
                  title="Control remoto"
                  description="Accede a tus datos desde cualquier lugar del mundo."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="update"
                  title="Monitoreo en tiempo real"
                  description="Mantén un ojo en tus plantas en todo momento."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="auto_graph"
                  title="Ahorro de tiempo y dinero"
                  description="Simplifica tu vida diaria con nuestro sistema automatizado, con nuestro sistema de riego inteligente, podrás ahorrar agua y energía"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="shield"
                  title="Seguridad"
                  description="Nuestro dispositivo está asegurado con el máximo nivel de encriptación."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
