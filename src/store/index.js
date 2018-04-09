import ActionTypes from '../constants/ActionTypes';

const createStore = (reducer, initialState) => {
    let currentState = initialState;
    let currentReducer = reducer;
    let currentListeners = [];
    let nextListeners = currentListeners;
    let isDispatching = false;

    // 确保事件能够被全部正确执行
    const ensureCanMutateNextListeners = () => {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    const getState = () => {
        if (isDispatching) {
            console.error("you may not call store.getState")
        };
        console.warn('currentState:::', currentState, initialState);
        return currentState;
    };
    const dispatch = (action) => {
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
            console.log('currentState::::', currentState);
        } finally {
            isDispatching = false;
        }
        const listeners = (currentListeners = nextListeners);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
        return action;
    };
    
    const subscribe = (listener) => {
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe () {
            if (!isSubscribed) {
                return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            const index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        };
    };
    dispatch({
        type: ActionTypes.INIT,
    });
    return {
        dispatch,
        subscribe,
        getState,
    }
}

export default createStore;