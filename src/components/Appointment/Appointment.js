import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="parent-container">
      <div className="appointment">
        <div className="appointment-form fw-bold">
          <h1 className="text-center">Appointment Form</h1>
          <form>
            {/* 2 column grid layout with text inputs for the first and last names  */}
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control"
                    placeholder="patient's name"
                  />
                  <label class="form-label" for="form6Example1">
                    Name
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form6Example2"
                    class="form-control"
                    placeholder="patient's age"
                  />
                  <label class="form-label" for="form6Example2">
                    Age
                  </label>
                </div>
              </div>
            </div>

            {/* Text input */}
            <div class="form-outline mb-4">
              <input type="text" id="form6Example3" class="form-control" />
              <label class="form-label" for="form6Example3">
                Department Name
              </label>
            </div>

            {/* Text input */}
            <div class="form-outline mb-4">
              <input type="text" id="form6Example4" class="form-control" />
              <label class="form-label" for="form6Example4">
                Doctor's Name
              </label>
            </div>

            {/* Email input */}
            <div class="form-outline mb-4">
              <input type="email" id="form6Example5" class="form-control" />
              <label class="form-label" for="form6Example5">
                Email
              </label>
            </div>

            {/* Number input */}
            <div class="form-outline mb-4">
              <input type="number" id="form6Example6" class="form-control" />
              <label class="form-label" for="form6Example6">
                Phone
              </label>
            </div>

            {/* Message input */}
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form6Example7"
                rows="4"
              ></textarea>
              <label class="form-label" for="form6Example7">
                Anything you might want to add?
              </label>
            </div>

            {/* Checkbox */}
            {/* Submit button */}
            <button type="submit" class="btn btn-info btn-block mb-4">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
