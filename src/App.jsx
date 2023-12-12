import { useState } from 'react';
import { TextField, Button, Stack } from "@mui/material";
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    //height to meters
    const heightInMeters = parseFloat(height) / 100;

    // Calculate BMI
    const calculatedBMI = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);

    setBMI(calculatedBMI);
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className="bg-light p-5 rounded">
        <h3 style={{ height: '35px',textAlign:'center' }}>Simple BMI Calculator</h3>
        <div style={{ width: '100%', height: '150px' }} className='d-flex justify-content-center align-items-center bg-primary mt-5 text-light shadow rounded flex-column'>
          <h4 style={{ height: '55px' }}>Your BMI</h4>
          {bmi && <p className="fw-bolder">{`BMI: ${bmi}`}</p>}
        </div>
        <form className="mt-5" onSubmit={calculateBMI}>
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic-principle"
              label="Enter your height (in cm)"
              variant="outlined"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic-rate"
              label="Enter your weight (in kg)"
              variant="outlined"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <Stack direction={'row'} spacing={2}>
            <Button type="submit" style={{ height: '60px', width: '50%' }} className="text-light" variant="contained">CALCULATE</Button>
            <Button onClick={resetForm} style={{ height: '60px', width: '50%' }} className="text-dark" variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;


















