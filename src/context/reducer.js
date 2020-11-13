export function reducer(state, action) {
  switch (action.type) {
    case 'SET-EMAIL' :
      state.email = action.payload ;
      return {...state};
    case 'SET-PASSWORD' :
      state.password = action.payload;
      return {...state};
    case 'SET-REPASSWORD':
      state.rePassword = action.payload;
      return {...state};
    default:
      return state;
  }
}
