import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplayCarrierList = () => {

  const [carrierData, setCarrierData] = useState('')
  // IP in "prod" mode

  useEffect(() => {
  	getCarrierData()
  }, [])

  const getCarrierData = () => {
      axios
        .get(`http://localhost:3001/api/v1/carriers`)
        .then((response) => {
          console.log(response)
          setCarrierData(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
  };

  return (
  	<div>
      {carrierData ? carrierData.map(x => {
      	<div>{x.legal_name}</div>
      }) : ''}
    </div>
  );
};

export default DisplayCarrierList;