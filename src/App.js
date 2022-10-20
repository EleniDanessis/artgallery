
import Pages from "./pages/Pages";
import {HashRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
       
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
