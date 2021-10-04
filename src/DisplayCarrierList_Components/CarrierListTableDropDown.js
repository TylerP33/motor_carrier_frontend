import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/DisplayCarrierList.css"

const CarrierListTableDropDown = (props) => {

      const dropDown = () => {
        return props.isClicked === true ? 'show-drop' : 'no-drop'
      }

	return(
      <div id={dropDown()}>
            <div>{props.dropDownData.legal_name}</div>
      </div>
	)
}

export default CarrierListTableDropDown