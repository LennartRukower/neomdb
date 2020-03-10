import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MenuDrawer from "./MenuDrawer";

/**
 * The navigation of the application
 */
const Nav:React.FunctionComponent = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = React.useState(false);
  const [isSearchBarActive, setIsSearchBarActive] = React.useState(false);

  /**
   * Handles the toogle drawer event
   *
   * @param open boolean value which indicates whether the drawer is open or not
   */
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsMenuDrawerOpen(open);
  };

  /**
   * Returns the scss-class for the search bar
   */
  const getClassForSearchBar = () => {
    if(isSearchBarActive) {
      return "search-active";
    } else {
      return "search";
    }
  };

  return (<div className="bar-root">
    <AppBar position="static" className="bar">
      <Toolbar>
        <IconButton
          edge="start"
          className="menu-button"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography 
          className="title" 
          variant="h6" noWrap
        >
          JBT neoMDB
        </Typography>
        <div className={getClassForSearchBar()}>
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Suche..."
            classes={{
              root: "search-input-root",
              input: "search-input-input"
            }}
            inputProps={{ "aria-label": "search" }}
            onFocus={() => {
              setIsSearchBarActive(true);
            }}
          onBlur={() => {
            setIsSearchBarActive(false);
          }}
          />
        </div>
      </Toolbar>
  </AppBar>
<MenuDrawer
  open={isMenuDrawerOpen}
  drawer={toggleDrawer}
/>
</div>);
};

export default Nav;