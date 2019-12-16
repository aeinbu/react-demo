import React, { useContext } from "react"
import BatchContext from "../Roots/BatchContext"
import { routingRoot } from "../Roots/RoutingRoot"



export default function BatchList() {
	// const [selctedItems, setSelectedItems] = useState([])
	const batch = useContext(BatchContext)

	return batch.map((batchItem, ix) => <BatchListItem key={ix} batchItem={batchItem} />)
}

function sign(batchItem) {
	routingRoot.sign([batchItem], { who: "arjan", when: "2019-12-18 09:56:12", what: "sign" })
}


class BatchListItem extends React.Component {
	constructor(props) {
		super(props)

		this.state = { signatures: [] }
	}

	componentDidMount() {
		this.subscription = routingRoot.subject.subscribe(() => {
			this.setState({
				...this.state,
				signatures: routingRoot.getSignatures(this.props.batchItem)
			})
		});
	}

	componentWillUnmount() {
		// unsubscribe to ensure no memory leaks
		this.subscription.unsubscribe();
	}

	render() {
		const { signatures } = this.state;
		const { batchItem } = this.props;
		return <>
			<article>
				<div className="flex horizontal">
					<div>
						<small>Prod. order</small>
						<br />
						{batchItem.productionOrderNumber}
					</div>
					<div>
						<small>SN</small>
						<br />
						{batchItem.endItemSerialNumber}
					</div>
					<div>
						<small>Operation</small>
						<br />
						{batchItem.operationNumber}
					</div>
				</div>
				<div className="spacer half-line"></div>
				<div className="flex horizontal">
					<div>
						<div>Signatures</div>
						<Signatures signatures={signatures} />
					</div>
					<div>
						<button onClick={() => sign(batchItem)}>Sign</button>
					</div>
				</div>
			</article>
		</>
	}
}


function Signatures({ signatures }) {
	return signatures.length === 0
		? <em>No signatures yet.</em>
		: signatures.map((signature, ix) => <Signature key={ix} signature={signature} />)
}


function Signature({ signature }) {
	return <>
		<div className={signature.what === "revoked" ? "revoked signature" : "signed signature"}>
			{signature.who}
			({signature.when})
		</div>
	</>
}