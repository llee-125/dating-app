import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Restore } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RestoreIcon from "@material-ui/icons/Restore";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "react-bootstrap/Image";

import MumblePng from "./mumble-logo.png";
import SvgMumble from "./MumbleIcon/Mumble";

// import MumbleIcon from "./Mumble.svg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  smallImg: {
    width: "30px",
    height: "30px",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Discover"
        value="discover"
        icon={<SvgMumble />}
      />
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />{" "}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>You Like</MenuItem>
        <MenuItem onClick={handleClose}>Mutual Like</MenuItem>
      </Menu>
      {/* <DropdownButton
        drop="up"
        key="right"
        title={
          <div>
            <Image
              className={classes.smallImg}
              src={MumblePng}
              thumbnail
              fluid={true}
              // src="https://via.placeholder.com/150"
              alt="icon"
            />
          </div>
        }
      >
        <Dropdown.Item eventKey="1">Likes You</Dropdown.Item>
      </DropdownButton> */}
      <BottomNavigationAction
        label="Likes"
        value="likes"
        onClick={handleClick}
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
