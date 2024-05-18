import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSnackBae } from '../context/SnackBae';

//component
import Navbar from "../component/Navbar";
import Loader from "../component/Loader";

const Layout = () => {
  const location = useLocation();
  const { id } = useParams();

  const visiblePaths = [
    `/profile/merchant/${id}`,
    '/restaurant',
  ];

  const { loader } = useSnackBae();


  const isVisible = visiblePaths.includes(location.pathname);
  return (
    <>
      {
        loader ? (<Loader/>) :
          (<div className="w-full h-fit">
            {
              isVisible ? (
                <div>
                </div >
              )
                : (
                  <Navbar />
                )
            }
            <Outlet />
          </div >)
      }
    </>
  )
};

export default Layout;
