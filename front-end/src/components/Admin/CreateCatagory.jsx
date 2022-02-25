import React, { useState } from "react";
import {  errorStatus, loadingStatus } from "../../utils/Message";
import {CatagoryPost} from "../../API/authApi"

const CreateCatagory = () => {
  const [values, setValues] = useState({
    catagory: "",
    error: false,
    success: false,
      loading: false,
    disabled : false,
  });

  const { catagory, error, success, loading, disabled } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({
         ...values,
          error: false,
          success: false,
            loading: true,
          disabled : true,
        });

        CatagoryPost({ catagory })
            .then(response => {
              setValues({
                catagory : "",
                loading: false,
                disabled: false,
                success: true,
              })
            
            })
            .catch(err => {
            let errorMsg = "Something Went Wrong";
            if (err.response) {
              errorMsg = err.response.data;
            } else {
              errorMsg = "Something Went Wrong";
            }
            setValues({
              ...values,
              error: errorMsg,
              loading: false,
              disabled: false,
              success: false,
            });
        })
        
    }
  
  const successMsg = (success) => {
    if(success) return <div className="alert alert-success">Catagory Added Successsful</div>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Create Catagory
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      {errorStatus(error, error)}
                      {successMsg(success)}
                      {loadingStatus(loading)}
                      <input
                        type="name"
                        name="catagory"
                        class="form-control"
                        value={catagory}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" class="btn btn-primary" disabled={disabled}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCatagory;
