import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import firebase from "firebase";

export default function AddressForm({
  state: {
    category,
    name,
    price,
    priceType,
    color,
    length,
    width,
    height,
    unit,
    technique,
    style,
    regionalStyle,
    theme,
    material,
    materialType,
    productType,
    finishing,
    feature,
    description,
  },
  handleChange,
  handleImg1,
  handleImg2,
  handleImg3,
  handleImg4,
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
        <Grid item xs={12} sm={6}>
          <TextField
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
          <FormControl style={{ width: "40%" }}>
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
        <Grid item xs={12} sm={12} style={{ marginTop: 16 }}>
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
        <Grid item xs={12} sm={12} style={{ marginTop: 16 }}>
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
        <Grid item xs={12} sm={12} style={{ marginTop: 16 }}>
          <label htmlFor="image4"> Upload Image 4</label>
          <input
            style={{ marginLeft: 24 }}
            id="image4"
            name="image4"
            type="file"
            onChange={handleImg4}
            accept="image/*"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="color"
            name="color"
            onChange={handleChange}
            value={color}
            label="Color"
            fullWidth
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Size Unit</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="unit"
              onChange={handleChange}
              value={unit}
            >
              <MenuItem value={"cm"}>cm</MenuItem>

              <MenuItem value={"m"}>m</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="length"
            name="length"
            onChange={handleChange}
            value={length}
            label="Length"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="width"
            name="width"
            onChange={handleChange}
            value={width}
            label="Width"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
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
            id="style"
            name="style"
            onChange={handleChange}
            value={style}
            label="Style"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="regionalStyle"
            name="regionalStyle"
            label="Regional Style"
            onChange={handleChange}
            value={regionalStyle}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="theme"
            name="theme"
            onChange={handleChange}
            value={theme}
            label="Theme"
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="materialType"
            name="materialType"
            label="Material Type"
            onChange={handleChange}
            value={materialType}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="productType"
            name="productType"
            label="Product Type"
            onChange={handleChange}
            value={productType}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="finishing"
            name="finishing"
            label="Finishing"
            onChange={handleChange}
            value={finishing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="feature"
            name="feature"
            label="Feature"
            onChange={handleChange}
            value={feature}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="description"
            name="description"
            label="Description"
            onChange={handleChange}
            value={description}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
