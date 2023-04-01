import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import LoginPage from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      {/* <Switch> */}
      {/* <Route path="/Login" component={<h1>tres</h1>} /> */}
      <Route path="/" component={LoginPage} />
        <Route path="/signup" component={Signup} />
      {/* </Switch> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
