const timeitMiddleware = ({getState, dispatch}) => next => action => {
	console.time(action.type);
	next(action);
	console.timeEnd(action.type);
}
