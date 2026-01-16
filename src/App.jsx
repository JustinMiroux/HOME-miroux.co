import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import './App.css';
import Maintenance from './screens/Maintenance.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Maintenance/>,
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );

}

export default App