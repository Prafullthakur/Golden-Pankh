import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export default function AddressForm({
  category,
  name,
  price,
  priceType,
  image,
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
  handleChange,
  handleImg,
}) {
  const classes = useStyles();

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
              <MenuItem value={"Home Decorative Items"}>
                Home Decorative Items
              </MenuItem>
              <MenuItem value={"Metal Urns"}>Metal Urns</MenuItem>
              <MenuItem value={"Christmas Decoration Items"}>
                Christmas Decoration Items
              </MenuItem>
              <MenuItem value={"Decorative Chandelier"}>
                Decorative Chandelier
              </MenuItem>
              <MenuItem value={"Candle Holder"}>Candle Holder</MenuItem>
              <MenuItem value={"Metal Handicrafts"}>Metal Handicrafts</MenuItem>
              <MenuItem value={"Flower Vase"}>Flower Vase</MenuItem>
              <MenuItem value={"MDF Frame"}>MDF Frame</MenuItem>
              <MenuItem value={"Decorative Alphabets Letters"}>
                Decorative Alphabets Letters
              </MenuItem>
              <MenuItem value={"Jewelled Mirror"}>Jewelled Mirror</MenuItem>
              <MenuItem value={"Farmstead Finials"}>Farmstead Finials</MenuItem>
              <MenuItem
                value={"PPE kit, Full Body Gown, Goggles, Masks, Waste Bags"}
              >
                PPE kit, Full Body Gown, Goggles, Masks, Waste Bags
              </MenuItem>
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
            required
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
              <MenuItem value={"USD"}>USD</MenuItem>

              <MenuItem value={"EURO"}>EURO</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: 16 }}>
          <label htmlFor="image"> Upload Image </label>
          <input
            style={{ marginLeft: 24 }}
            id="image"
            name="image"
            type="file"
            onChange={handleImg}
            value={image}
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="length"
            name="length"
            onChange={handleChange}
            value={length}
            label="length"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl style={{ width: "40%" }}>
            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="priceType"
              onChange={handleChange}
              value={unit}
            >
              <MenuItem value={"centimeters"}>centimeters</MenuItem>

              <MenuItem value={"meters"}>meters</MenuItem>
            </Select>
          </FormControl>
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
          <FormControl style={{ width: "40%" }}>
            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="priceType"
              onChange={handleChange}
              value={unit}
            >
              <MenuItem value={"centimeters"}>centimeters</MenuItem>

              <MenuItem value={"meters"}>meters</MenuItem>
            </Select>
          </FormControl>
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
          <FormControl style={{ width: "40%" }}>
            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="priceType"
              onChange={handleChange}
              value={unit}
            >
              <MenuItem value={"centimeters"}>centimeters</MenuItem>

              <MenuItem value={"meters"}>meters</MenuItem>
            </Select>
          </FormControl>
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
