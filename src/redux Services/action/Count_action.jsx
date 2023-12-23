export const Increment = 'INCREMENT';
export const Decrement = 'DECREMENT';

export const incrementCounter = () => {
    return {
        type: Increment
    }
}

export const decrementCounter = () => {
    return {
        type: Decrement
    }
}

