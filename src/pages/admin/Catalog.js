import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import AirplayIcon from "@material-ui/icons/AirplayRounded";
import Copyright from "../../components/copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [catalogURL, setCatalogURL] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    firebase
      .firestore()
      .doc("Meta/3dCatalog")
      .get()
      .then((data) => {
        setCatalogURL(data.data().link);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const uploadEdit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .firestore()
      .doc("Meta/3dCatalog")
      .set({ link: `${catalogURL}` })
      .then((data) => {
        alert("Updated Successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AirplayIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit 3D Catalog URL
          </Typography>
          <form className={classes.form} noValidate onSubmit={uploadEdit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="catalogURL"
              label="3D Catalog URL"
              name="catalogURL"
              value={catalogURL}
              onChange={(e) => {
                setCatalogURL(e.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? <CircularProgress color="white" /> : "Save"}
            </Button>
          </form>
        </div>
      </Container>

      <Copyright />
    </>
  );
}
