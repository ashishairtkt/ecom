import { BrowserRouter as Router } from "react-router-dom";
import RoutesConf from "./routes/routesConf";

export default function App() {
  return (
    <Router>
      <RoutesConf />
    </Router>
  );
}
