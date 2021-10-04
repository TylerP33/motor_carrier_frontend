import axios from "axios";
import React, { useEffect, useState } from "react";
import CarrierListTableDropDown from './CarrierListTableDropDown.js'
import "../Styles/DisplayCarrierList.css"

const CarrierListTable = (props) => {

	const [isClicked, setIsClicked] = useState(false)
	const [companyId, setCompanyId] = useState('')
	const [dropDownData, setDropDownData] = useState('')

	const handleDropDown = (e, id) => {
		setIsClicked(true)
		setCompanyId(id)
		props.carrierData.forEach(y => {
			if (y.id === id){
				setDropDownData(y)
			}
		})
	}

	return(
      <div id="carrier-info-container">
      	<table id="carrier-list-table">
      			<tbody>
      				<tr>
      					<th>DOT/MC</th>
      					<th>Company Name/DBA Name</th>
      					<th>Contact</th>
      					<th>State</th>
      					<th>Driver Count</th>
      					<th>Power Units</th>
      				</tr>
      			{props.carrierData ? props.carrierData.map(x => {
      				return <div id="drop-down-container">
      				<tr key={x.id} onClick={(e) => handleDropDown(e, x.id)}>
      					<td>{x.dot_number}</td>
      					<td>{x.legal_name}</td>
      					<td>{x.telephone}</td>
      					<td>{x.phy_state}</td>
      					<td>{x.driver_total}</td>
      					<td>{x.nbr_power_unit}</td>
      				</tr>
      				   {x.id === companyId ? <CarrierListTableDropDown dropDownData={dropDownData} isClicked={isClicked} /> : ''}
      				</div>
      			}) : false}
      			</tbody>
      	</table>
      </div>
	)
}

export default CarrierListTable