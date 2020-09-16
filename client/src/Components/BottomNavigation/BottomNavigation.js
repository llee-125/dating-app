import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RestoreIcon from "@material-ui/icons/Restore";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SvgMumble from "./MumbleIcon/Mumble";

// import MumbleIcon from "./Mumble.svg";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  // imageIcon: {
  //   height: "100%",
  //   width: "100%",
  // },
  // iconRoot: {
  //   textAlign: "center",
  // },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      {/* <SvgIcon component={MumbleIcon} viewBox="0 0 600 476.6" /> */}
      {/* <Icon className={classes.iconRoot}>
        <img className={classes.imageIcon} src={"/mumble-logo.png"} alt={""} />
      </Icon> */}

      <BottomNavigationAction
        label="Discover"
        value="discover"
        component={Link}
        to="/profile/discover"
        icon={<SvgMumble />}
      />
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />

      <BottomNavigationAction
        label="Likes"
        value="likes"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        icon={<FavoriteIcon />}
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem component={Link} to="/profile/likes">
          <ListItemText label="YouLikes" value="Youlikes" primary="You Like" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Likes You" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Mutual Likes" />
        </StyledMenuItem>
      </StyledMenu>

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
