import { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Contries from "./components/Countries";
import Continents from "./components/Continents";

function App() {
  const [isCountryTab, setIsCountryTab] = useState(true);

  return (
    <div style={{ height: "100vh" }}>
      <FormControl fullWidth sx={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>{isCountryTab ? "Countries" : "Continents"}</h1>
          <Button
            sx={{ marginLeft: "30px" }}
            variant="contained"
            onClick={() => {
              setIsCountryTab(!isCountryTab);
            }}
          >{`Switch to ${isCountryTab ? "Continents" : "Contries"}`}</Button>
        </div>
        {isCountryTab ? <Contries /> : <Continents />}
      </FormControl>
    </div>
  );
}

export default App;
