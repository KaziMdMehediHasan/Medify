import React from "react";

const Contact = () => {
  return (
    <div className="container p-5 my-5">
      <h1 className="text-center mb-5">Stay In Touch</h1>
      {/* Material form contact  */}
      <div className="card">
        <h5 className="card-header info-color white-text text-center py-4">
          <strong>Contact us</strong>
        </h5>

        {/* Card content */}
        <div className="card-body px-lg-5 pt-0">
          {/* Form */}
          <form
            className="text-center"
            style={{ color: "#757575" }}
            action="#!"
          >
            {/* Name */}
            <div className="md-form my-3">
              <input
                type="text"
                id="materialContactFormName"
                className="form-control"
                placeholder="your name"
              />
              {/* <label for="materialContactFormName">Name</label> */}
            </div>

            {/* E-mail */}
            <div className="md-form">
              <input
                type="email"
                id="materialContactFormEmail"
                className="form-control"
                placeholder="your email"
              />
              {/* <label for="materialContactFormEmail">E-mail</label> */}
            </div>

            {/* Subject */}
            <span className="mx-2">Subject</span>
            <select className="my-5 mdb-select">
              <option value="" disabled>
                Choose option
              </option>
              <option value="1" selected>
                Feedback
              </option>
              <option value="2">Report a bug</option>
              <option value="3">Feature request</option>
              <option value="4">Feature request</option>
            </select>

            {/* Message */}
            <div className="md-form">
              <textarea
                id="materialContactFormMessage"
                className="form-control md-textarea"
                rows="3"
                placeholder="your message"
              ></textarea>
              {/* <label for="materialContactFormMessage">Message</label> */}
            </div>

            {/* Copy */}

            {/* Send button */}
            <button
              className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect"
              type="submit"
            >
              Send
            </button>
          </form>
          {/* Form  */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
