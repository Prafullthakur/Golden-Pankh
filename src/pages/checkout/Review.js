import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({
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
    origin,

    material,
    productType,
    deliveryTime,
    deliveryDetails,
    masterCartonSize,
    cbm,
    moq,
    uom,
    packingDetail,
    supplyAbility,
    sampleAvailable,
    samplePolicy,
    paymentTerm,
    mainExportMarket,
    fobPort,
    remark,
  },
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography color={"primary"} variant="h6" gutterBottom>
        New Product Summary
      </Typography>
      <Grid container spacing={2}>
        {category && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Category
            </Typography>
            <Typography gutterBottom>{category}</Typography>
          </Grid>
        )}
        {name && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Product Name
            </Typography>
            <Typography gutterBottom>{name}</Typography>
          </Grid>
        )}
        {price && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Price
            </Typography>
            <Typography gutterBottom>{`${price} ${priceType}`}</Typography>
          </Grid>
        )}
        {color && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Color
            </Typography>
            <Typography gutterBottom>{color}</Typography>
          </Grid>
        )}
        {length && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Length
            </Typography>
            <Typography gutterBottom>{`${length} ${unit}`}</Typography>
          </Grid>
        )}
        {width && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Width
            </Typography>
            <Typography gutterBottom>{`${width} ${unit}`}</Typography>
          </Grid>
        )}
        {height && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Height
            </Typography>
            <Typography gutterBottom>{`${height} ${unit}`}</Typography>
          </Grid>
        )}
        {cbm && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              CBM
            </Typography>
            <Typography gutterBottom>{cbm}</Typography>
          </Grid>
        )}
        {material && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Material
            </Typography>
            <Typography gutterBottom>{material}</Typography>
          </Grid>
        )}

        {productType && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Product Type
            </Typography>
            <Typography gutterBottom>{productType}</Typography>
          </Grid>
        )}
        {technique && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Technique
            </Typography>
            <Typography gutterBottom>{technique}</Typography>
          </Grid>
        )}
        {origin && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Origin
            </Typography>
            <Typography gutterBottom>{origin}</Typography>
          </Grid>
        )}

        {deliveryTime && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Delivery Time
            </Typography>
            <Typography gutterBottom>{deliveryTime}</Typography>
          </Grid>
        )}
        {deliveryDetails && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Delivery Details
            </Typography>
            <Typography gutterBottom>{deliveryDetails}</Typography>
          </Grid>
        )}
        {masterCartonSize && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Master Carton Size
            </Typography>
            <Typography gutterBottom>{masterCartonSize}</Typography>
          </Grid>
        )}
        {moq && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Minimum order Quantity
            </Typography>
            <Typography gutterBottom>{moq}</Typography>
          </Grid>
        )}
        {uom && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Unit of Measurement
            </Typography>
            <Typography gutterBottom>{uom}</Typography>
          </Grid>
        )}
        {packingDetail && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Packing Details
            </Typography>
            <Typography gutterBottom>{packingDetail}</Typography>
          </Grid>
        )}
        {supplyAbility && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Supply Ability
            </Typography>
            <Typography gutterBottom>{supplyAbility}</Typography>
          </Grid>
        )}
        {sampleAvailable && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Sample Available
            </Typography>
            <Typography gutterBottom>{sampleAvailable}</Typography>
          </Grid>
        )}
        {samplePolicy && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Sample Policy
            </Typography>
            <Typography gutterBottom>{samplePolicy}</Typography>
          </Grid>
        )}
        {paymentTerm && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Payment Term
            </Typography>
            <Typography gutterBottom>{paymentTerm}</Typography>
          </Grid>
        )}
        {mainExportMarket && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Main Export Market
            </Typography>
            <Typography gutterBottom>{mainExportMarket}</Typography>
          </Grid>
        )}
        {fobPort && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              FOB Port
            </Typography>
            <Typography gutterBottom>{fobPort}</Typography>
          </Grid>
        )}
        {remark && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Remark
            </Typography>
            <Typography gutterBottom>{remark}</Typography>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}
