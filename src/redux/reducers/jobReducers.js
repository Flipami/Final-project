const defaultState = {
    job: null
  }
  
  export default (state = defaultState, action) => {
  
    if(action.type === "SET_JOB_INFO"){
      return {
        ...state,
        job: action.job
      };
    }
  
    return state;
  }