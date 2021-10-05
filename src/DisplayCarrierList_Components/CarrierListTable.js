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
		props.carrierData.forEach(x => {
			if (x.id === id){
				setDropDownData(x)
			}
		})
	}

	const trIsClicked = (id) => {
		if (id === companyId){
			return "silver"
		} else{
			return false
		}
	}

	return(
      <div id="carrier-info-container">
      	<table id="carrier-list-table">
      			<tbody>
      				<tr>
      					<th>DOT/MC</th>
      					<th>Company Name/DBA Name</th>
      					<th>Contact</th>
      					<th>Driver Count</th>
      					<th>Power Units</th>
      				</tr>
      			{props.carrierData ? props.carrierData.map((x, i) => {
      				return <div key={i} id="drop-down-container">
      				<tr id={trIsClicked(x.id)} key={x.id} onClick={(e) => handleDropDown(e, x.id)}>
      					<td >{x.dot_number}</td>
      					<td>{x.legal_name}</td>
      					<td>
      						<div id="contact-container">
      							<div>{x.telephone}</div>
      							<div className="opacity">{x.email_address}</div>
      						</div>
      					</td>
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