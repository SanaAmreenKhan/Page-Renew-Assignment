import React from "react";
import {
  Typography,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import image1 from "../../src/dummy1.avif";

const CardContentMain = ({ skip }) => {
  const handleSelectedSkip = () => {
    alert("Skip selected successfully.");
  };

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
      <Paper
        elevation={6}
        sx={{
          maxWidth: 360,
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={skip.image || image1}
            alt={`${skip.size} Yard Skip`}
            sx={{ objectFit: "cover" }}
          />
          {skip?.allows_heavy_waste && (
            <Chip
              label="Allows heavy waste"
              color="secondary"
              variant="outlined"
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                color: "#ffeb3b",
                borderColor: "#ffeb3b",
              }}
            />
          )}
        </Box>
        <CardContent
          sx={{
            textAlign: "center",
            bgcolor: "#1E1E2E",
            color: "#fff",
            p: 3,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mt: 1 }}
          >
            <Chip
              label={`${skip?.size} Yard Skip`}
              variant="outlined"
              sx={{ color: "#ffeb3b", borderColor: "#ffeb3b" }}
            />
            <Chip
              label={`${skip?.hire_period_days} day hire period`}
              sx={{ color: "#ffff", borderColor: "#ffff" }}
              variant="outlined"
            />
          </Stack>
          <Box
            sx={{
              py: 1,
              px: 2,
              borderRadius: 2,
              display: "inline-block",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              £{skip?.price_before_vat + skip?.vat} per week
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2, borderRadius: 2 }}
            onClick={handleSelectedSkip}
          >
            Select This Skip
          </Button>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default CardContentMain;
