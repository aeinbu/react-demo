import React from "react"

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

export default React.createContext(batch)
