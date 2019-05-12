// middleware creator
//
const nullMiddleware = param => ({ getState, dispatch }) => next => action => {
	next(action !== null ? action: { type: param || 'UNKNOWN'});
}
