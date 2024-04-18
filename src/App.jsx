import { BrowserRouter as Router } from "react-router-dom";
import RoutesConf from "./routes/RouterConfig";

export default function App() {
  return (
    <Router>
      <RoutesConf />
    </Router>
  );
}
