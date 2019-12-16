import { BehaviorSubject /*, Observable*/ } from "rxjs"

class RoutingRoot {
    constructor() {
        this.subject = new BehaviorSubject()
        this.load()
    }

    load() {
        this._data = [{
                key: { productionOrderNumber: "300002239", endItemSerialNumber: "AEI-003-01" },
                routing: [{
                        operationNumber: 10,
                        signatures: [
                            { who: "arjan", when: "2017-10-13 10:30:00", what: "revoked" },
                            { who: "ole", when: "2017-10-13 10:30:00", what: "sign" },
                            { who: "robin", when: "2017-10-13 10:45:00", what: "sign" }
                        ]
                    },
                    { operationNumber: 20, signatures: [] },
                    { operationNumber: 30, signatures: [] },
                    { operationNumber: 40, signatures: [] }
                ]
            },
            {
                key: { productionOrderNumber: "300002239", endItemSerialNumber: "AEI-003-02" },
                routing: [{
                        operationNumber: 10,
                        signatures: [
                            { who: "arjan", when: "2017-10-13 10:31:00", what: "sign" },
                            { who: "robin", when: "2017-10-13 10:47:00", what: "sign" }
                        ]
                    },
                    {
                        operationNumber: 20,
                        signatures: [
                            { who: "tor inge", when: "2017-10-15 10:30:00", what: "sign" }
                        ]
                    },
                    { operationNumber: 30, signatures: [] },
                    { operationNumber: 40, signatures: [] }
                ]
            },
            {
                key: { productionOrderNumber: "300002239", endItemSerialNumber: "AEI-003-03" },
                routing: [
                    { operationNumber: 10, signatures: [] },
                    { operationNumber: 20, signatures: [] },
                    { operationNumber: 30, signatures: [] },
                    { operationNumber: 40, signatures: [] }
                ]
            }
        ]

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
		});
		this.subject.next();
    }
}

export const routingRoot = new RoutingRoot();
