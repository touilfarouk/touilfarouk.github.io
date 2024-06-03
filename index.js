const { createRoot } = ReactDOM;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import App from "./components/App";

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
