import React, { useContext } from "react"
import { BatchContext } from "../Contexts/BatchContext"
import { TenantContext } from "../Contexts/TenantContext"
import { useSubscribedState } from "../Hooks/SubscriptionHooks"


const identifierToKey = identifier => `${identifier.productionOrderNumber}::${identifier.endItemSerialNumber}::${identifier.operationNumber}`


export default function BatchList() {
    const { batch } = useContext(BatchContext)
    return batch.map((identifier) => <BatchListItem key={identifierToKey(identifier)} identifier={identifier} />)
}


function BatchListItem(props) {
    const { routingRoot } = useContext(TenantContext)

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
                </div>
                <div>
                    <button onClick={() => routingRoot.sign([identifier], { who: "arjan", when: "2019-12-18 09:56:12", what: "sign" }) }>Sign</button>
                </div>
            </div>
            <Signatures identifier={identifier} signatures={signatures} />

        </article>
    </>
}


function Signatures({ identifier, signatures }) {
    return signatures.length === 0
        ? <em>No signatures yet.</em>
        : signatures.map((signature, ix) => <Signature key={ix} identifier={identifier} signature={signature} />)
}


function Signature({ identifier, signature }) {
    const { routingRoot } = useContext(TenantContext)

    return signature.what === "revoked"
        ? <>
            <div className="flex horizontal">
                <div className="revoked signature">
                    {signature.who} ({signature.when})
            </div>
            </div>
        </>
        : <>
            <div className="flex horizontal">
                <div className="signed signature">
                    {signature.who} ({signature.when})
            </div>
                <div>
                    <button onClick={() => routingRoot.revoke([identifier], signature)}>Revoke</button>
                </div>
            </div>
        </>

}