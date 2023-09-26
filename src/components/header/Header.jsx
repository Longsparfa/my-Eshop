import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/HiddenLink";

const logo = (
  <div className="">
    <Link to="/">
      <h2 className="text-white w-[25%] cursor-pointer">
        e<span className="text-[#00a35c]">Kasuwa</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className="">
    <NavLink
      to="/cart"
      className={({ isActive }) =>
        isActive
          ? "active active::after flex "
          : "flex text-white relative hover:text-[#00a35c] "
      }
    >
      Cart
      <FaShoppingCart size={20} />
      <p className="text-white absolute top-[-1rem] right-[-1rem] font-medium">
        0
      </p>
    </NavLink>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //monitor currently singned in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        }

        setDisplayName(user.displayName);

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("logout successfull");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <header className="">
        <div className="w-[100%] h-[8rem] max-w-[1000px] mx-auto p-[1rem] flex justify-between items-center relative">
          {logo}

          <nav
            className={`na ${
              showMenu ? "translate-x-0" : "translate-y-[-200%] "
            } `}
          >
            <div
              className={
                showMenu
                  ? "absolute top-0 right-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] transition-all 0.3s translate-x-[100%]"
                  : ""
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className="flex justify-between ">
                {logo}
                <FaTimes
                  size={22}
                  className="text-white mt-4 cursor-pointer "
                />
              </li>
            </ul>

            <ul
              className="block sm:flex justify-between align-center"
              onClick={hideMenu}
            >
              <li className="py-[5px] mx-[5px] border-b-2 border-b-solid border-b-[#333]">
                <Link to="/" className="text-white hover:text-[#00a35c]">
                  Home
                </Link>
              </li>
              <li className="py-[5px] mx-[5px] border-b-2 border-b-solid border-b-[#333]">
                <Link
                  to="/contactUs"
                  className="text-white hover:text-[#00a35c]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <span className="" onClick={hideMenu}>
              <Link
                to="/login"
                className="block py-[5px] mx-[5px] border-b-2 border-b-solid border-b-[#333] text-white hover:text-[#00a35c] "
              >
                LogIn
              </Link>
              <Link
                to="/register"
                className="block py-[5px] mx-[5px] border-b-2 border-b-solid border-b-[#333] text-white hover:text-[#00a35c] "
              >
                Register
              </Link>
              <Link
                to="/order-history"
                className="block py-[5px] mx-[5px] border-b-2 border-b-solid border-b-[#333] text-white hover:text-[#00a35c] "
              >
                My Orders
              </Link>
            </span>
            <span className="" onClick={hideMenu}>
              <Link
                to="/cart"
                className="flex py-[10px] mx-[5px] text-white absolute hover:text-[#00a35c] "
              >
                Cart
                <FaShoppingCart size={20} />
                <p className="text-white absolute top-[-1rem] right-[-1rem] font-medium pt-[8px]">
                  0
                </p>
              </Link>
            </span>
          </nav>

          <nav className="w-[75%] flex justify-between md:hidden">
            <ul className="flex justify-between">
              <li className="my-0 mx-[5px]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active active::after "
                      : "text-white hover:text-[#00a35c]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="my-0 mx-[5px]">
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    isActive
                      ? "active active::after "
                      : "text-white hover:text-[#00a35c]"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="flex">
              <ShowOnLogin>
                <a href="#home" className="text-[#00a35c] flex">
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </a>
              </ShowOnLogin>
              <span className="">
                <ShowOnLogout>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "active active::after "
                        : "my-0 mx-[5px] text-white hover:text-[#00a35c]"
                    }
                  >
                    LogIn
                  </NavLink>
                </ShowOnLogout>
                <ShowOnLogin>
                  <NavLink
                    to="/order-history"
                    className={({ isActive }) =>
                      isActive
                        ? "active active::after "
                        : "my-0 mx-[5px] text-white hover:text-[#00a35c] "
                    }
                  >
                    My Orders
                  </NavLink>
                </ShowOnLogin>
                <ShowOnLogin>
                  <NavLink
                    to="/"
                    className="my-0 mx-[5px] text-white hover:text-[#00a35c]"
                    onClick={logoutUser}
                  >
                    Log Out
                  </NavLink>
                </ShowOnLogin>
              </span>
              {cart}
            </div>
          </nav>

          <div className="md:flex justify-around mt-4 hidden">
            <span>{cart}</span>
            <HiOutlineMenuAlt3
              size={28}
              onClick={toggleMenu}
              className="text-white pl-2 cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
