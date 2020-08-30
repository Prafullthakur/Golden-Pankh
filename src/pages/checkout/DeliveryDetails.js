import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function DeliveryDetails({
  state: {
    deliveryTime,
    moq,
    uom,
    packingDetails,
    mcsLength,
    mcsWidth,
    mcsHeight,
    cbm,
    supplyAbility,
    sampleAvailable,
    samplePolicy,
    paymentTerm,
    mainExportMarket,
    fobPort,
  },
  handleChange,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Delivery Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="deliveryTime"
            value={deliveryTime}
            label="Delivery Time"
            fullWidth
          />
        </Grid>{" "}
        <Grid item xs={12} md={6}>
          <TextField
            type="number"
            onChange={handleChange}
            name="moq"
            value={moq}
            label="Minimum Order Quantity"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="uom"
            value={uom}
            label="Unit of Measurement"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="packingDetails"
            value={packingDetails}
            label="Packing Details (Inner/Master)"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          style={{
            marginBottom: "-40px",
          }}
        >
          <p style={{ color: "#3f51b5", fontSize: "16px" }}>
            Master Carton Size (in cm)
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            id="mcsLength"
            name="mcsLength"
            onChange={handleChange}
            value={mcsLength}
            label="Length"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            id="mcsWidth"
            name="mcsWidth"
            onChange={handleChange}
            value={mcsWidth}
            label="Width"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            id="mcsHeight"
            name="mcsHeight"
            onChange={handleChange}
            value={mcsHeight}
            label="Height"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="cbm"
            name="cbm"
            onChange={handleChange}
            value={cbm}
            label="CBM"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="number"
            onChange={handleChange}
            required
            name="supplyAbility"
            value={supplyAbility}
            label="Supply Ability (Qty. Per Month)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Sample Available
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="sampleAvailable"
              onChange={handleChange}
              value={sampleAvailable}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="samplePolicy"
            label="Sample Policy"
            value={samplePolicy}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            required
            name="paymentTerm"
            value={paymentTerm}
            label="Payment Terms"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="mainExportMarket"
            value={mainExportMarket}
            label="Main Export Market"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            required
            name="fobPort"
            label="FOB Port"
            value={fobPort}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
