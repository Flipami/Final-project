const defaultState = {
    contact: null
  }
  
  export default (state = defaultState, action) => {
  
    if(action.type === "SET_CONTACT_INFO"){
      return {
        ...state,
        contact: action.contact
      };
    }
  
    return state;
  }