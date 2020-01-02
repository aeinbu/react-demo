import React, { useState } from 'react'
import './App.scss'
// import './Ugly.css'
import BatchList from "./Components/BatchList"
import Actions from "./Components/Actions"
import TenantSelector from "./Components/TenantSelector"

import BatchContext from "./Roots/BatchContext"
import TenantContext from "./Roots/TenantContext"


function App() {
	const [state, setState] = useState({ batch: [], tenantId: "200" })

	const modifyBatch = (batch) => setState({ ...state, batch })
	const batchContext = { batch: state.batch, modifyBatch: modifyBatch }

	const switchTenant = (tenantId) => setState({ ...state, tenantId })
	const tenantContext = { tenantId: state.tenantId, switchTenant: switchTenant }

	return (
		<>
			<BatchContext.Provider value={batchContext}>
				<TenantContext.Provider value={tenantContext}>
					<section>
						<TenantSelector />
					</section>
					<div className="spacer half-line"></div>
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
				</TenantContext.Provider>
			</BatchContext.Provider>
		</>
	)
}

export default App
