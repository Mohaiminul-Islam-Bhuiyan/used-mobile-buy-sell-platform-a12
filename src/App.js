import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
