import React from "react";
import { Typography } from "@mui/material";

const PageTypography = ({ variant, componentStyle, content }) => {
  return (
    <Typography variant={variant} sx={componentStyle}>
      {content}
    </Typography>
  );
};

export default PageTypography;
