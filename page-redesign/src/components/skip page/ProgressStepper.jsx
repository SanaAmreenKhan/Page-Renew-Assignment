import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import styled from "@emotion/styled";
import { icons, steps } from "../dummy data/utilsFiles";

const StyledStepper = styled(Stepper)`
  background: none;
  padding: 16px 0;
  .MuiStepLabel-label {
    font-weight: 600;
    color: #ccc;
  }
  .Mui-active {
    color: #fff !important;
  }
`;

const ProgressStepper = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <Box sx={{ borderRadius: 2, p: 2, mb: 4 }}>
      <StyledStepper alternativeLabel activeStep={activeStep}>
        {steps?.map((label, index) => (
          <Step
            key={`${index}_${label}`}
            disabled={index > 2}
            sx={{ cursor: index <= 2 ? "pointer" : "no-drop" }}
            title={label?.title}
          >
            <StepLabel StepIconComponent={() => icons[index]}>
              {label.step}
            </StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </Box>
  );
};

export default ProgressStepper;
