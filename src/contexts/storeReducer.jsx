// export const initial = []

export const actions = {
    "add": "ADD_TO_CART",
    "remove": "REMOVE_FROM_CART"
}

export const reducerFunc = (initial, action) => {
    switch (action.type) {
        case actions.add:
            console.log("added");
            return [
                ...initial,
                action.payload
            ]
    }
}


/* 


const [newState,dispatch] = useReducer(reducerFunction,action)


*/