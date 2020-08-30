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
        {itemNumber && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Item Number
            </Typography>
            <Typography gutterBottom>{`${itemNumber}`}</Typography>
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
        {colorFinish && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Color/Finish
            </Typography>
            <Typography gutterBottom>{colorFinish}</Typography>
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
            <Typography gutterBottom>{`${length} ${sizeUnit}`}</Typography>
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
            <Typography gutterBottom>{`${width} ${sizeUnit}`}</Typography>
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
            <Typography gutterBottom>{`${height} ${sizeUnit}`}</Typography>
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
        {remarks && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Remarks
            </Typography>
            <Typography gutterBottom>{remarks}</Typography>
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
        {moq && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Minimum Order Quantity
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
        {packingDetails && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Packing Details
            </Typography>
            <Typography gutterBottom>{packingDetails}</Typography>
          </Grid>
        )}
        {mcsLength && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              MCS Length
            </Typography>
            <Typography gutterBottom>{mcsLength}</Typography>
          </Grid>
        )}
        {mcsWidth && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              MCS Width
            </Typography>
            <Typography gutterBottom>{mcsWidth}</Typography>
          </Grid>
        )}
        {mcsHeight && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              MCS Height
            </Typography>
            <Typography gutterBottom>{mcsHeight}</Typography>
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
      </Grid>
    </React.Fragment>
  );
}
