import axios from "axios";
import React, { useState, useEffect } from "react";
import Input from "./Input";

const Address = () => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "getting data...",
    address: "getting data...",
    state: "getting data...",
    pincode: "getting data...",
  });

  const [disableEditing, setDisableEditing] = useState(true);

  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    const response = await axios.get("http://localhost:3000/shippngAddress/1");
    setShippingDetails(response.data);
  };

  const getDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;
    setShippingDetails({ ...shippingDetails, [key]: value });
  };

  const submitShippingHandler = async (e: any) => {
    e.preventDefault();
    await axios.put("http://localhost:3000/shippngAddress/1", shippingDetails);
    setDisableEditing(true);
  };

  return (
    <div className="address">
      <h4>Shipping Address</h4>
      <form onSubmit={submitShippingHandler}>
        <Input
          name={"fullName"}
          getDetails={getDetails}
          disableEditing={disableEditing}
          value={shippingDetails.fullName}
        />
        <Input
          name={"address"}
          getDetails={getDetails}
          disableEditing={disableEditing}
          value={shippingDetails.address}
        />
        <div className="row">
          <Input
            name={"state"}
            getDetails={getDetails}
            disableEditing={disableEditing}
            value={shippingDetails.state}
          />
          <Input
            name={"pincode"}
            getDetails={getDetails}
            disableEditing={disableEditing}
            value={shippingDetails.pincode}
          />
        </div>
        {!disableEditing && (
          <button type="submit" className="btn btn-success">
            Save Shipping Details
          </button>
        )}
      </form>
      {disableEditing && (
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setDisableEditing(false)}>
          Edit Shipping Details
        </button>
      )}
    </div>
  );
};

export default Address;
