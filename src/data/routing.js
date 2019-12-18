export const routing = [{
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
    },
    {
        key: { productionOrderNumber: "300002239", endItemSerialNumber: "AEI-003-04" },
        routing: [
            { operationNumber: 10, signatures: [] },
            { operationNumber: 20, signatures: [] },
            { operationNumber: 30, signatures: [] },
            { operationNumber: 40, signatures: [] }
        ]
    },
    {
        key: { productionOrderNumber: "300002239", endItemSerialNumber: "AEI-003-05" },
        routing: [
            { operationNumber: 10, signatures: [
                { who: "tor inge", when: "2017-10-15 10:30:00", what: "sign" }
            ] },
            { operationNumber: 20, signatures: [] },
            { operationNumber: 30, signatures: [] },
            { operationNumber: 40, signatures: [] }
        ]
    }
]
