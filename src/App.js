import './App.css';
import Genres from "./genres/Genres";
import {Route, Routes} from "react-router";
import Films from "./films/Films";
import NoMatch from "./no-match/NoMatch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" exact={true} element={<Genres />} />
          <Route path="/films/:id" exact={true} element={<Films />} />
          <Route path="*" element={<NoMatch />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
