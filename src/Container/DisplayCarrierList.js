import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/DisplayCarrierList.css"
import CarrierListTable from '../DisplayCarrierList_Components/CarrierListTable.js'

const DisplayCarrierList = () => {

  const [carrierData, setCarrierData] = useState('')

  useEffect(() => {
  	getCarrierData()
  }, [])

  // IP in "prod" mode
  const getCarrierData = () => {
      axios
        .get(`http://localhost:3001/api/v1/carriers`)
        .then((response) => {
          setCarrierData(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
  };
  console.log(carrierData)
  return (
  	<div id="carrier-list-container">
  		<CarrierListTable carrierData={carrierData} />
    </div>
  );
};

export default DisplayCarrierList;