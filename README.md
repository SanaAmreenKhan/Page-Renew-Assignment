*********Skip Selection App: *********

1) Overview:
Skip Selection App is a React-based web application that allows users to choose skip sizes based on their needs. The application integrates a multi-step selection process using Material UI components for a seamless user experience.

2) Features:
Stepper: A guided selecion process with step bystep navigation.

Dynamic Skip: Fetches skip data from an API and displays it dynamically.

Loading & Error Handling: Displays a loader while fetching data and manages errors.

Reusable Components: Modular and reusable components for better scalability.

Material UI Integration: Styled using Material UI and Emotion for consistent UI design.


/src
  ├── components
  | ├──dummy data
  |     ├── utilsFiles.jsx            # Icons and stepper data
  | ├──Skip page
  │     ├── ProgressStepper.jsx       # Stepper component for navigation
  │     ├── SkipSelectionBody.jsx     # Main UI for skip selection
  │     ├── SkipSelectionMainPage.jsx # Fetches data and renders the UI
  │     ├── PageTypography.jsx        # Reusable typography component
  │     ├── CardContentMain.jsx       # Skip size card component        
  ├── App.js                        # Main entry component
  ├── App.css                       # Styling for the application


3) API Integration
Fetches skip data from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft ,
Uses fetch() to retrieve data and manage loading/error states.

4) Technologies Used
React (Functional Components, Hooks)
Material UI (Stepper, Typography, Icons)
Emotion (Styled Components)
JavaScript (ES6+)



