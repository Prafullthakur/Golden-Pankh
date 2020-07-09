import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-form py-5">
        <div className="container">
          <h4 className="text-center">GOLDEN PANKH EXPORT IMPORT</h4>
          <hr />
          <h5>
            Describe Your BUYING Requirements <span>*</span>
          </h5>
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                <span>*</span> Tips on getting accurate quotes. Please include
                product name, order quantity, usage, special requests if any in
                your inquiry.
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPhone">
                  Mobile No. <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning text-center">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
