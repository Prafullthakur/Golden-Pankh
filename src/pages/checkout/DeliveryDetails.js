import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function DeliveryDetails({
  state: {
    deliveryTime,
    moq,
    uom,
    packingDetail,
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
            label="Unit of Measure"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="packingDetail"
            value={packingDetail}
            label="Packing Detail"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            required
            name="supplyAbility"
            value={supplyAbility}
            label="Supply Ability"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            required
            name="sampleAvailable"
            value={sampleAvailable}
            label="Sample Available"
            fullWidth
          />
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
