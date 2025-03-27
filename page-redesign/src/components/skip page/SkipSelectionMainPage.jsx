import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SkipSelectionBody from "./SkipSelectionBody";

const SkipSelectionMainPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((response) => response.json())
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#5f5f78" }}>
      <SkipSelectionBody skips={skips} loading={loading} error={error} />
    </Box>
  );
};

export default SkipSelectionMainPage;
