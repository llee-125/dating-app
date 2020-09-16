import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HeightOutlinedIcon from "@material-ui/icons/HeightOutlined";
import LocalBarOutlinedIcon from "@material-ui/icons/LocalBarOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import SmokingRoomsOutlinedIcon from "@material-ui/icons/SmokingRoomsOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import clsx from "clsx";
import React from "react";

import avatar1 from "../BottomNavigation/mumble-logo.png";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  image: {
    width: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Discover = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    console.log(e);
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label={props.children.counter}
            className={classes.avatar}
            src={avatar1}
          />
        }
        action={
          <IconButton aria-label="settings" aria-controls="customized-menu">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.children.first_name}
        subheader={props.children.age}
      />
      <CardMedia
        className={classes.media}
        image={props.children.profile_image}
        title="Profile image"
      />

      <CardActions disableSpacing>
        <List className={classes.root}>
          <ListItem>
            <IconButton
              aria-label="add to favorites"
              onClick={(e) => {
                props.updateLikes(props.children._id);
              }}
              text={props.children._id}
            >
              <FavoriteIcon />
            </IconButton>
            <ListItemText />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <HeightOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.height + " inches"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <WorkOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.job} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.location} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocalBarOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.drinks} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SmokingRoomsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.smokes} />
          </ListItem>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </List>
        {/* <IconButton aria-label="share">
          <CakeOutlinedIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Essay:</Typography>
          <Typography paragraph>{props.children.essay}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Discover;
