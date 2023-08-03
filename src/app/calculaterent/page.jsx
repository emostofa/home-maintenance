"use client";
import RentTable from "@/Components/RentTable";
import React, { useState } from "react";

export default function CalculateRent() {
  const [inputFields, setInputFields] = useState([{ name: "", cost: "" }]);

  const [rent, setRent] = useState("Please fill the fields");

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);

    let arr = data.map((input) =>
      parseInt(input.cost.valueOf() === "" ? 0 : input.cost.valueOf())
    );
    let sum = arr.reduce((a, b) => a + b, 0);
    setRent(sum);
  };

  const addFields = () => {
    let newfield = { name: "", cost: "" };

    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  const submit = (e) => {
    e.preventDefault();
  };
  const handleCalculateRent = () => {
    
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h3>Calculated Rent</h3>
            <div>{rent}</div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={submit}>
                {inputFields.map((input, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="name"
                        placeholder="Name"
                        value={input.name}
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        name="cost"
                        placeholder="Cost"
                        value={input.cost}
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <button
                        className="btn btn-alert"
                        onClick={() => removeFields(index)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </form>

              <button className="btn btn-info" onClick={addFields}>
                Add More..
              </button>
              <button
                className="btn btn-primary"
                onClick={() => window.my_modal_2.showModal()}
              >
                Submit
              </button>
              <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                  {inputFields.map((element, index) => {
                    return (
                      <RentTable
                        key={index}
                        index={index + 1}
                        name={inputFields[index].name}
                        cost={inputFields[index].cost}
                      />
                    );
                  })}

                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    name="name"
                    placeholder="Name"
                    value={rent}
                    onChange={handleCalculateRent}
                  />
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
