//CRIAÇÃO DE STATE

const initialState ={
    nome:'Silas',
    age:37
}

function reducer(state = initialState) {
    return state
}

const store = Redux.createStore(reducer);
console.log(store);
const state = store.getState()
console.log(state);