/**
 * Creates a generic reducer
 * @param {object} initialState The initial state
 * @param {object} additionalHandlers An associative array of action handlers. The string name is the action type and the value is a function taking in 'state' and 'action', returning the new state.
 */
export default (initialState = {}, handlers = {}) =>
  (state = initialState, action) =>
    ((handlers[action.type]) ? handlers[action.type](state, action) : state);
