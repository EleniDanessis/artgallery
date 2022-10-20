
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
