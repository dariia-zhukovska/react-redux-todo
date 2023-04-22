import { createRoot } from "react-dom/client";
import { configureStore } from "./store/index";

import Root from './Root'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore();

root.render(
  <Root store={store}/>
);
