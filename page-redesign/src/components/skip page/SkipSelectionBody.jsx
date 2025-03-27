import React from "react";
import { Typography, Container, CircularProgress, Grid } from "@mui/material";
import ProgressStepper from "./ProgressStepper";
import PageTypography from "./PageTypography";
import CardContentMain from "./CardContentMain";

const SkipSelectionBody = ({ skips, loading, error }) => {
  return (
    <Container sx={{ backgroundColor: "#5f5f78" }}>
      <ProgressStepper />
      <PageTypography
        variant={"h4"}
        componentStyle={{ fontWeight: "bold", mt: 4, mb: 1 }}
        content={"Choose Your Skip Size"}
      />
      <PageTypography
        variant={"body1"}
        componentStyle={{ color: "#bbb" }}
        content={"Select the skip size that best suits your needs"}
      />

      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "auto" }} />
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {skips.map((skip) => (
            <CardContentMain skip={skip} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SkipSelectionBody;
