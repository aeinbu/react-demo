import { useEffect, useState } from "react"


export function useSubscription(subject, action) {
    return useEffect(() => {
            const subscription = subject.subscribe(action)

            return () => {
                // unsubscribe to ensure no memory leaks
                subscription.unsubscribe()
            }
        },
        // eslint-disable-next-line
        [])
}


export function useSubscribedState(initialState, subject, action) {
    const [state, setState] = useState(initialState)
    useSubscription(subject, () => setState(action))
    return [state, setState]
}
