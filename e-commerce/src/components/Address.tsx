import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShippingDetails, updateShippingDetails } from "../redux/ducks/user";
import Input from "./Input";

const Address = () => {
  const dispatch = useDispatch();
  const address = useSelector((state: any) => state.user.address);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    state: "",
    pincode: "",
  });

  const [disableEditing, setDisableEditing] = useState(true);

  useEffect(() => {
    if (!address) {
      dispatch(getShippingDetails());
    } else {
      setShippingDetails(address);
    }
  }, [address]);

  const getDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;
    setShippingDetails({ ...shippingDetails, [key]: value });
  };

  const submitShippingHandler = async (e: any) => {
    e.preventDefault();
    dispatch(updateShippingDetails(shippingDetails));
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
