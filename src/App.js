import './App.css';
import Form from './components/Form/form';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';



function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={{width: 400, height: 500}}>
          <CardContent>
            <Form></Form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default App;
