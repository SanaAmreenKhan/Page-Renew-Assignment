import {
  CheckCircle,
  CalendarToday,
  Payment,
  Delete,
} from "@mui/icons-material";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";

export const icons = {
    0: <CheckCircle />,
    1: <Delete />,
    2: <CheckCircle color="secondary" />,
    3: <SafetyCheckIcon />,
    4: <CalendarToday />,
    5: <Payment />,
  };
  
  export const steps = [
    { step: "Postcode", title: "LE10 1SH" },
    { step: "Waste Type", title: "Garden waste" },
    { step: "Select Skip", title: "Select to skip" },
    { step: "Permit Check" },
    { step: "Choose Date" },
    { step: "Payment" },
  ];