import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  const [state, setState] = React.useState({
    facebook: "",
    whatsapp: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    firebase
      .firestore()
      .doc("Meta/social")
      .get()
      .then((data) => {
        setState(data.data());
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
      .doc("Meta/social")
      .set(state)
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
            <SupervisorAccountIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Social Links
          </Typography>
          <form className={classes.form} noValidate onSubmit={uploadEdit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="facebook"
              label="Facebook"
              name="facebook"
              value={state.facebook}
              onChange={(e) => {
                setState({ ...state, facebook: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="twitter"
              label="Twitter"
              name="twitter"
              value={state.twitter}
              onChange={(e) => {
                setState({ ...state, twitter: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="instagram"
              label="Instagram"
              type="instagram"
              id="instagram"
              value={state.instagram}
              onChange={(e) => {
                setState({ ...state, instagram: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="linkedin"
              label="LinkedIn"
              type="linkedin"
              id="linkedin"
              value={state.linkedin}
              onChange={(e) => {
                setState({ ...state, linkedin: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="whatsapp"
              label="Whatsapp"
              type="whatsapp"
              id="whatsapp"
              value={state.whatsapp}
              onChange={(e) => {
                setState({ ...state, whatsapp: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="youtube"
              label="Youtube"
              type="youtube"
              id="youtube"
              value={state.youtube}
              onChange={(e) => {
                setState({ ...state, youtube: e.target.value });
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
