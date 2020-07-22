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
    style,
    regionalStyle,
    theme,
    material,
    materialType,
    productType,
    finishing,
    feature,
    description,
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
        {materialType && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Material Type
            </Typography>
            <Typography gutterBottom>{materialType}</Typography>
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
        {style && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Style
            </Typography>
            <Typography gutterBottom>{style}</Typography>
          </Grid>
        )}
        {regionalStyle && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Regional Style
            </Typography>
            <Typography gutterBottom>{regionalStyle}</Typography>
          </Grid>
        )}
        {finishing && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Finishing/Color
            </Typography>
            <Typography gutterBottom>{finishing}</Typography>
          </Grid>
        )}
        {feature && (
          <Grid item xs={12} sm={6}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Feature
            </Typography>
            <Typography gutterBottom>{feature}</Typography>
          </Grid>
        )}
        {description && (
          <Grid item xs={12} sm={12}>
            <Typography
              color={"primary"}
              variant="h6"
              gutterBottom
              className={classes.title}
            >
              Description
            </Typography>
            <Typography gutterBottom>{description}</Typography>
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
      </Grid>
    </React.Fragment>
  );
}
