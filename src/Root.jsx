import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'




export default function Root({store}) {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":filter" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}