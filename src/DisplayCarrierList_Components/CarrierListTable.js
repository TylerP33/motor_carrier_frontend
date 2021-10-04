import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/DisplayCarrierList.css"

const CarrierListTable = (props) => {
	return(
      <div id="carrier-info-container">
      	{props.carrierData ? props.carrierData.map(x => {
      	return <table>
      			<tbody>
      				<tr>
      					<th>DOT/MC</th>
      					<th>Company Name/DBA Name</th>
      					<th>Contact</th>
      				</tr>
      				<tr>
      					<td>{x.dot_number}></td>
      				</tr>
      				<tr>
      					<td>{x.legal_name}</td>
      					<td>{x.dot_number}</td>
      				</tr>
      				 <tr>
      					<td>{x.phone}</td>
      					<td>{x.email}</td>
      					<td>{x.fax}</td>
      				</tr>
      			</tbody>
      		   </table>
      	}) : ''}
      </div>
	)
}

export default CarrierListTable