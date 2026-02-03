//IMPORTING RRD
import { RouterProvider } from "react-router-dom";
//IMPORTING ROUTES
import { routes } from "./routes/MainRoute";
//IMPORTING CONTEXTS
import { LoaderProvider } from "./contexts/providers/LoaderProvider";

const App = () => {
  return (
    <LoaderProvider>
      <RouterProvider router={routes} />
    </LoaderProvider>
  );
};

export default App;
