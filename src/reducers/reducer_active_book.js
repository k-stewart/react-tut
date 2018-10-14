// state arg only includes the state this reducer creates;
// reducers create and consume a set object
// Default state to null to avoid errors when state is undefined.
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED': return action.payload;
  }
  return state;
};
