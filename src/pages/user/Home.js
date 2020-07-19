import React from "react";
import "./style.css";
import Image1 from "../../assets/Handmade-Wirework-Peacock.jpg";
import Image2 from "../../assets/Decorative-Heart-Frame.jpg";
import Image3 from "../../assets/Iron-Ferris-Wheel.jpg";
import Image4 from "../../assets/Metal-Geometrical-Star.jpg";
import Image5 from "../../assets/Metal-Decorative-Crown.jpg";
const Home = (props) => {
  React.useEffect(() => {
    console.log(props.searchResult);
  }, []);

  return (
    <>
      <section class="popular-products">
        <div class="container">
          <h3>MOST POPULAR PRODUCTS</h3>
          <div class="row">
            <div class="col-md-5 mt-4">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Image4} class="d-block w-100 h-100" />
                  </div>
                  <div class="carousel-item">
                    <img src={Image3} class="d-block w-100 h-100" />
                  </div>
                  <div class="carousel-item">
                    <img src={Image1} class="d-block w-100 h-100" />
                  </div>
                  <div class="carousel-item">
                    <img src={Image2} class="d-block w-100 h-100" />
                  </div>
                  <div class="carousel-item">
                    <img src={Image5} class="d-block w-100 h-100" />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-md-7">
              <p>
                <strong>About Us</strong>
                <br />
                <strong>Golden Pankh Export Import</strong> is a major{" "}
                <strong>manufacturer, supplier and exporter</strong> dealing in
                a wide variety of decorative offerings that includes{" "}
                <strong>
                  Riser Planters, Decorative Garden Products, Hand Made
                  Planters, Handmade Wire Worked Products, Sheet Urns, Garden
                  Products, Succulents, Candle Holder, Candle Chandeliers,
                  Electric Chandeliers, Wall Decoration Items, Beaded Chandelier
                  etc.
                </strong>{" "}
                Established in the year 2016 in{" "}
                <strong>Moradabad, Uttar Pradesh, India,</strong>we have become
                a leading business entity in this domain. Our manufactured
                products are very much famous among clients because of their
                high grade quality and matchless appeal. We ensure they have the
                perfect finish and ooze magnificence and splendor. Because of
                such factors, they have become famous in a very short span of
                time and are demanded across the international market. We also
                ensure all offerings are quality checked before releasing them
                in the domestic and global market.
              </p>
              <p>
                <strong>Experienced Workforce</strong>
                <br /> We are blessed with well experienced and trained
                professionals who are hired based on their skills and in-depth
                knowledge in this domain. All of them are properly trained and
                are updated with the latest technologies, developments and
                changes in the market. They ensure we conduct surveys in the
                market on a regular basis. This helps us keep pace with the
                changes and update our product range as per the new demands and
                requirements in the market. Also, in order to ensure smooth
                functioning of every activity, we have divided our workforce
                into separate teams based on their skills and knowledge. All
                teams work with a common intention of making our offerings best
                in the market and one of a kind in the category of handmade
                products.
              </p>
              <p>
                <strong>Serving Quality</strong>
                <br /> We are a well known business entity and are famous for
                serving the best quality offerings. We have become famous in the
                market within a very short period of time, thanks to our
                commitment towards maintaining stringent quality norms. We are
                highly appreciated among our customers because of this. We
                ensure raw materials using which our offerings are manufactured
                are received from reliable sources and are of the best available
                grade. Our experts also supervise and guide the appointed staff
                at every stage of the manufacturing process. They ensure all
                offerings feature perfect finishing and are defect free. Once
                the manufacturing process is over, products created are finally
                inspected by our quality checking and inspection team. This
                helps us ensure that all our offerings are immaculate in terms
                of design, finish and style. Apart from these, other points that
                strengthen our business positioning are:
              </p>
              <ul>
                <li>Expert professionals</li>
                <li>Sophisticated infrastructure with modern facility</li>
                <li>Proper packaging of offerings in high quality material</li>
                <li>Safe transit of offerings.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
