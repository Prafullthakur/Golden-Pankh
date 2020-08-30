import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import firebase from "firebase";
import { withRouter } from "react-router-dom";

function ProductDetails({
  state: {
    category,
    name,
    itemNumber,
    price,
    priceType,
    colorFinish,
    length,
    width,
    height,
    sizeUnit,
    technique,
    material,
    origin,
    remarks,
  },
  handleChange,
  handleImg1,
  handleImg2,
  handleImg3,
  // handleImg4,
  location,
}) {
  const [categories, setCategories] = React.useState({});

  React.useEffect(() => {
    firebase
      .firestore()
      .doc("Meta/categories")
      .get()
      .then((data) => setCategories(data.data()))
      .catch((err) => {
        console.log(err);
        alert("An error Occured!");
      });
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={12}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              onChange={handleChange}
              value={category}
            >
              {Object.keys(categories).map((key) => (
                <MenuItem value={key}>{key}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            onChange={handleChange}
            value={name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="number"
            id="itemNumber"
            name="itemNumber"
            label="Item Number"
            onChange={handleChange}
            value={itemNumber}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            id="price"
            name="price"
            label="Price"
            value={price}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Price Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="priceType"
              onChange={handleChange}
              value={priceType}
            >
              <MenuItem value={"USD ($)"}>USD ($)</MenuItem>

              <MenuItem value={"EUR (€)"}>EUR (€)</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: 16 }}>
          <label htmlFor="image1"> Upload Image 1</label>
          <input
            style={{ marginLeft: 24 }}
            id="image1"
            name="image1"
            type="file"
            onChange={handleImg1}
            accept="image/*"
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ marginTop: 4 }}>
          <label htmlFor="image2"> Upload Image 2</label>
          <input
            style={{ marginLeft: 24 }}
            id="image2"
            name="image2"
            type="file"
            onChange={handleImg2}
            accept="image/*"
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ marginTop: 4 }}>
          <label htmlFor="image3"> Upload Image 3</label>
          <input
            style={{ marginLeft: 24 }}
            id="image3"
            name="image3"
            type="file"
            onChange={handleImg3}
            accept="image/*"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="colorFinish"
            name="colorFinish"
            onChange={handleChange}
            value={colorFinish}
            label="Color/Finish"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Size Unit</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="sizeUnit"
              onChange={handleChange}
              value={sizeUnit}
            >
              <MenuItem value={"cm"}>cm</MenuItem>

              <MenuItem value={"inch"}>inch</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            id="length"
            name="length"
            onChange={handleChange}
            value={length}
            label="Length"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            id="width"
            name="width"
            onChange={handleChange}
            value={width}
            label="Width"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            id="height"
            name="height"
            onChange={handleChange}
            value={height}
            label="Height"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="technique"
            name="technique"
            label="Technique"
            onChange={handleChange}
            value={technique}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="material"
            name="material"
            onChange={handleChange}
            value={material}
            label="Material"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="origin"
            name="origin"
            onChange={handleChange}
            value={origin}
            label="Origin"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            onChange={handleChange}
            required
            name="remarks"
            label="Remarks"
            value={remarks}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(ProductDetails);
