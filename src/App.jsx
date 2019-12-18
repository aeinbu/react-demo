import React, { useState } from 'react'
import './App.scss'
// import './Ugly.css'
import BatchList from "./Components/BatchList"
import Actions from "./Components/Actions"
import BatchContext from "./Roots/BatchContext"


function App() {
	const [state, setState] = useState({batch:[]})
	const modifyBatch = (batch) => setState({ batch })
	const context = { batch: state.batch, modifyBatch: modifyBatch }

	return (
		<>
			<BatchContext.Provider value={context}>
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
			</BatchContext.Provider>
		</>
	)
}

export default App
