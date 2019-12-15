import React, { } from 'react'
import './App.css'
import BatchList from "./Components/BatchList"
import BatchContext from "./Roots/BatchContext"


const batch = [{
	productionOrderNumber: "300002239",
	endItemSerialNumber: "AEI-003-01",
	operationNumber: 10
}, {
	productionOrderNumber: "300002239",
	endItemSerialNumber: "AEI-003-02",
	operationNumber: 10
}, {
	productionOrderNumber: "300002239",
	endItemSerialNumber: "AEI-003-03",
	operationNumber: 10
}]


function App() {
	return (
		<div className="App">
			<BatchContext.Provider value={batch}>
				<div className="flex horizontal">
					{/* <header className="App-header"> */}
					<div className="panel">
						<h2 className="heading">Left panel</h2>
						<div className="body">
							<BatchList />
						</div>
					</div>
					<div className="panel">
						<h2 className="heading">Middle panel</h2>
						<div className="body">
						</div>
					</div>
					<div className="panel">
						<h2 className="heading">Right panel</h2>
						<div className="body">
							<button>Comment</button>
							<button>Sign</button>
						</div>
					</div>
					{/* </header> */}
				</div>
			</BatchContext.Provider>
		</div>
	)
}





export default App
