
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet>
          <title>Art Gallery</title>
          <meta 
            name="description"
            content="Eleni Danessis's Art Gallery React Project" 
          />
        </Helmet>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
