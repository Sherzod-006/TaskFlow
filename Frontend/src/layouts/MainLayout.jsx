//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING REACT
import { useContext } from "react";
//IMPORTING CONTEXTS
import { LoaderContext } from "../contexts/Contexts";
//IMPORTING COMPONENTS
// import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { isLoading } = useContext(LoaderContext);

  return (
    <main className="flex flex-col h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          {/* <Navbar /> */}
          <main>
            <Outlet />
          </main>
        </section>
      )}
    </main>
  );
};

export default MainLayout;
