import React, { useContext } from "react"
import BatchContext from "../Roots/BatchContext"

const batchItemToKey = (batchItem) => `${batchItem.productionOrderNumber}::${batchItem.endItemSerialNumber}::${batchItem.operationNumber}`

export default function BatchList() {
	// const [selctedItems, setSelectedItems] = useState([])
	const batch = useContext(BatchContext)
	return (
		<div className="task-batch-item">
			{batch.map(batchItem => <div key={batchItemToKey(batchItem)}>
				<h3>Batch Item</h3>
				<div>
					I am productionOrderNumber: {batchItem.productionOrderNumber},
					endItemSerialNumber: {batchItem.endItemSerialNumber},
					operationNumber: {batchItem.operationNumber}.
				</div>
			</div>)}
		</div>
	)
}