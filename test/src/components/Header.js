import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Hamburger from "./Hamburger";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const Header = () => {
  // State of our menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  }); //to track toggle menu

  // State of our button
  const [disabled, setDisabled] = useState(false);
  // const navigate = useNavigate();
  let location = useLocation();

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    setState({ clicked: false, menuName: "Menu" });

    // navigate.listen(() => {
    //   setState({ clicked: false, menuName: "Menu" });
    // });
  }, [location]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      }); //when the app is open
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      }); //open the menu
      console.log(2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      }); //close the menu
      console.log(3);
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">BDH.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                Menu
                {/* {state.menuName} */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
