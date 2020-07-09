import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Product from "../../components/Product";
import Title from "./Title";

import firebase from "firebase";

const rows = [
  { name: "Home Decorative Items" },
  { name: "Metal Urns" },
  { name: "Christmas Decoration Items" },
  { name: "Decorative Chandelier" },
  { name: "Candle Holder" },
  { name: "Metal Handicrafts" },
  { name: "Flower Vase" },
  { name: "MDF Frame" },
  { name: "Decorative Alphabets Letters" },
  { name: "Jewelled Mirror" },
  { name: "Farmstead Finials" },
  { name: "PPE kit, Full Body Gown, Goggles, Masks, Waste Bags" },
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Products() {
  const [category, setCategory] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Products/")
      .get()
      .then((data) => {
        let temp = [];
        data.forEach((doc) => {
          temp.push(doc.data());
        });
        setProducts(temp);
      });
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>
        {!category ? (
          "Product Categories"
        ) : (
          <>
            <Link
              onClick={() => {
                setCategory(null);
              }}
            >
              <ArrowBack />
            </Link>
            {category}
          </>
        )}
      </Title>
      {!category ? (
        <Table size="large">
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <Link
                  onClick={() => {
                    setCategory(row.name);
                  }}
                >
                  <TableCell>{row.name}</TableCell>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <>
          {products.map((product) => {
            if (product.category === category)
              return <Product data={product} />;
          })}
        </>
      )}
    </React.Fragment>
  );
}
