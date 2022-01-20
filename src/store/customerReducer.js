const defaultState = {
  customers: [{ name: 'Serhii', id: 1 }],
}

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] }
    case 'DELETE_CUSTOMERS':
      return { ...state, name: state.name - action.payload }
    default:
      return state
  }
}

export default customerReducer
