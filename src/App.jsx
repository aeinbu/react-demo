import React, { useState, useContext } from 'react'

import './App.scss'
// import './Ugly.css'
import BatchList from "./Components/BatchList"
import Actions from "./Components/Actions"
import TenantSelector from "./Components/TenantSelector"
import { BatchItemSelector } from "./Components/BatchItemSelector"

import RoutingRoot from "./Roots/RoutingRoot"

import { BatchContext } from "./Contexts/BatchContext"
import { TenantContext } from "./Contexts/TenantContext"


function App() {
	return <TenantFrame />
}


function TenantFrame() {
	const [state, setState] = useState({ tenantId: "" })

	const diagnostics = { tenantId: state.tenantId }
	const tenantContext = {
		tenantId: state.tenantId,
		switchTenant: (tenantId) => setState({ ...state, tenantId }),
		routingRoot: new RoutingRoot(diagnostics)
	}

	return (
		<TenantContext.Provider value={tenantContext}>{
			state.tenantId === ""
				? <TenantIsNotSelected />
				: <TenantIsSelected key={state.tenantId} />
		}</TenantContext.Provider>
	);
}


const TenantIsNotSelected = () => <div className="large">
	Please select tenant: <TenantSelector />
</div>


const TenantIsSelected = () => <>
	<section>
		Current tenant: <TenantSelector />
	</section>
	<div className="spacer half-line"></div>
	<BatchFrame />
</>


function BatchFrame() {
	const [state, setState] = useState({ batch: [] })

	const batchContext = {
		batch: state.batch,
		modifyBatch: (batch) => setState({ ...state, batch })
	}

	return (
		<BatchContext.Provider value={batchContext}>{
			state.batch.length === 0
				? <BatchIsEmpty />
				: <BatchIsNotEmpty />
		}</BatchContext.Provider>
	);
}


const BatchIsEmpty = () => <section>
	<BatchItemSelector />
</section>


const BatchIsNotEmpty = () => <>
	<section className="main-grid">
		<section className="panel">
			<h2 className="heading" >Batch items</h2>
			<div className="body">
				<BatchList />
			</div>
		</section>
		<section className="panel">
			<h2 className="heading">Middle panel</h2>
			<div className="body">
			</div>
		</section>
		<section className="panel">
			<h2 className="heading">Actions</h2>
			<div className="body">
				<Actions />
			</div>
		</section>
	</section>
</>


export default App
