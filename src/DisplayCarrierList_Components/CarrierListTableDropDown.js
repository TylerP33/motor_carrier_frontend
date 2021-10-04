import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/DisplayCarrierList.css"

const CarrierListTableDropDown = (props) => {

      const dropDown = () => {
        return props.isClicked === true ? 'show-drop' : 'no-drop'
      }

      console.log(props.dropDownData)
	return(
      <div id="carrier-info-dropdown-container">
            <table id={dropDown()}>
                  <tbody>
                  <tr>
                        <th>DBA</th>
                        <th>State</th>
                        <th>Carrier Type</th>
                        <th>Hazmat?</th>
                  </tr>
                  <tr>  
                        <td>{props.dropDownData.dba_name}</td>
                        <td>{props.dropDownData.phy_state}</td>
                        <td>{props.dropDownData.carrier_operation}</td>
                        <td>{props.dropDownData.hm_flag}</td>
                  </tr>
                  </tbody>
            </table>
                        <table id={dropDown()}>
                  <tbody>
                  <tr>
                        <th>DBA</th>
                        <th>State</th>
                        <th>Carrier Type</th>
                        <th>Hazmat</th>
                  </tr>
                  <tr>  
                        <td>{props.dropDownData.dba_name}</td>
                        <td>{props.dropDownData.phy_state}</td>
                        <td>{props.dropDownData.carrier_operation}</td>
                        <td>{props.dropDownData.hm_flag}</td>
                  </tr>
                  </tbody>
            </table>
      </div>
	)
}

export default CarrierListTableDropDown