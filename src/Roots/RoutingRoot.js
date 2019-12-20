import { BehaviorSubject /*, Observable*/ } from "rxjs"
import { routing } from "../data/routing"

class RoutingRoot {
    constructor() {
        this.subject = new BehaviorSubject()
        this.load()
    }

    load() {
        this._data = routing

        this.subject.next()
    }

    getRoutings(identifiers) {
        return identifiers.map(identifier => this._getRouting(identifier)).routing
    }

    _getRouting(identifier) {
        return this._data.find(({ key }) => key.productionOrderNumber === identifier.productionOrderNumber
            && key.endItemSerialNumber === identifier.endItemSerialNumber)
    }

    getSignatures(identifier) {
        return this._getRouting(identifier).routing.find(x => x.operationNumber === identifier.operationNumber).signatures
    }

    sign(identifiers, signature) {
        identifiers.forEach(identifier => {
            this._getRouting(identifier).routing.find(x => x.operationNumber === identifier.operationNumber).signatures.push(signature);
        })
        this.subject.next()
    }

    revoke(identifiers, signature) {
        identifiers.forEach(identifier => {
            const signatures = this._getRouting(identifier).routing.find(x => x.operationNumber === identifier.operationNumber).signatures
            signatures.find(x => x === signature).what = "revoked"
        })
        this.subject.next()
    }
}

export const routingRoot = new RoutingRoot()
