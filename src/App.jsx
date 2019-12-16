import React, { } from 'react'
import './App.css'
import './Ugly.css'
import BatchList from "./Components/BatchList"
import Actions from "./Components/Actions"
// import BatchContext from "./Roots/BatchContext"


function App() {
	return (
		<div className="App">
			{/* <BatchContext.Provider value={batch}> */}
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
			{/* </BatchContext.Provider> */}
		</div>
	)
}

export default App
