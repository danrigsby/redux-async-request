import AsyncRequest from './AsyncRequest';
import createReducer from './createReducer';

const defaultSuffixes = ['PENDING', 'FULFILLED', 'REJECTED'];

/**
 * Creates a reducer for AsyncRequest actions
 * @param {string} baseAction The base name of the action such as 'MY_ACTION' which will be prepended with suffixes like 'MY_ACTION_FULFILLED'
 * @param {object} additionalHandlers An associative array of additional action handlers. The string name is the action type and the value is a function taking in 'state' and 'action', returning the new state.
 * @param {object} initialState The initial state, defaults to an empty AsyncResult, but can be overwritten when new default values or additional properties
 * @param {string[]} suffixes An array of 3 suffixes used for pending, fulfilled, and completed
 */
const createAsyncRequestReducer = (baseAction, additionalHandlers = {}, initialState = new AsyncRequest(), suffixes = defaultSuffixes) =>
  createReducer(initialState, {
    ...{
      [`${baseAction}_${suffixes[0]}`]: (state, action) => ({
        ...state,
        ...{
          isLoading: true,
          request: action.data
        }
      }),
      [`${baseAction}_${suffixes[1]}`]: (state, action) => ({
        ...state,
        ...{
          isLoading: true,
          response: action.payload,
          error: null
        }
      }),
      [`${baseAction}_${suffixes[2]}`]: (state, action) => ({
        ...state,
        ...{
          isLoading: true,
          request: null,
          error: action.payload
        }
      })
    },
    ...additionalHandlers
  });

export default createAsyncRequestReducer;
