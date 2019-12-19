import React, { useContext, useEffect, useState } from "react"
import BatchContext from "../Roots/BatchContext"
import { routingRoot } from "../Roots/RoutingRoot"


const identifierToKey = identifier => `${identifier.productionOrderNumber}::${identifier.endItemSerialNumber}::${identifier.operationNumber}`


export default function BatchList() {
	const { batch } = useContext(BatchContext)
	return batch.map((identifier) => <BatchListItem key={identifierToKey(identifier)} identifier={identifier} />)
}


function sign(identifier) {
	routingRoot.sign([identifier], { who: "arjan", when: "2019-12-18 09:56:12", what: "sign" })
}


function useSubscription(subject, action, deps) {
	return useEffect(() => {
		const subscription = subject.subscribe(() => {
			action();
		})

		return () => {
			// unsubscribe to ensure no memory leaks
			subscription.unsubscribe()
		}
	}, deps)
}


function useSubscribedState(initialState, subject, action, deps) {
	const [state, setState] = useState(initialState)
	useSubscription(subject, () => setState(action), deps)
	return [state, setState]
}


function BatchListItem(props) {
	const [state] = useSubscribedState(
		{ signatures: [] },
		routingRoot.subject,
		state => ({
			...state,
			signatures: routingRoot.getSignatures(props.identifier)
		}),
		[props.identifier]
	)

	const { signatures } = state
	const { identifier } = props
	return <>
		<article>
			<div className="flex horizontal">
				<div>
					<small>Prod. order</small>
					<br />
					{identifier.productionOrderNumber}
				</div>
				<div>
					<small>SN</small>
					<br />
					{identifier.endItemSerialNumber}
				</div>
				<div>
					<small>Operation</small>
					<br />
					{identifier.operationNumber}
				</div>
			</div>
			<div className="spacer half-line"></div>
			<div className="flex horizontal">
				<div>
					<div><small>Signatures</small></div>
					<Signatures signatures={signatures} />
				</div>
				<div>
					<button onClick={() => sign(identifier)}>Sign</button>
				</div>
			</div>
		</article>
	</>
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