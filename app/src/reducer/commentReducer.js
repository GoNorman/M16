const commentReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
        localStorage.setItem(
          "state",
          JSON.stringify([...state, { id: action.id, name: action.name, text : action.text }])
        );
        return [...state, {id:action.id, name:action.name, text : action.text}];
        case "DELETE_COMMENT":
            let deleteState = [...state];
            let localNewState = JSON.parse(localStorage.getItem("state"));
            let filterState = deleteState.filter((item, j) => action.id !== j);
            let filterLocalState = localNewState.filter((item, j) => action.id !== j);
            localStorage.setItem('state', JSON.stringify(filterLocalState));
        return filterState;
      default:
        return state;
    }
}
export default commentReducer;