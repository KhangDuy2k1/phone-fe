import DefaultComponent from "./component/default";
import RouteNav from "./route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {RouteNav.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<DefaultComponent path={route.path}>{route.element}</DefaultComponent>}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
