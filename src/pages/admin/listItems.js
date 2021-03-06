import React from "react";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Divider from "@material-ui/core/Divider";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AirplayIcon from "@material-ui/icons/Airplay";
export const mainListItems = (
  <div>
    <Link onClick={() => (window.location.href = "/dashboard")}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
    </Link>
    <Link onClick={() => (window.location.href = "/addProduct")}>
      <ListItem button>
        <ListItemIcon>
          <AddToPhotosIcon />
        </ListItemIcon>
        <ListItemText primary="Add Product" />
      </ListItem>
    </Link>
    <Link onClick={() => (window.location.href = "/social")}>
      <ListItem button>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Social" />
      </ListItem>
    </Link>
    <Link onClick={() => (window.location.href = "/catalog")}>
      <ListItem button>
        <ListItemIcon>
          <AirplayIcon />
        </ListItemIcon>
        <ListItemText primary="3D Catalog" />
      </ListItem>
    </Link>
    <Link onClick={() => (window.location.href = "/changePassword")}>
      <ListItem button>
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
    </Link>
    <Divider />
    <Link
      onClick={() => {
        localStorage.removeItem("userToken");
        window.location.href = "/admin";
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </Link>
  </div>
);
