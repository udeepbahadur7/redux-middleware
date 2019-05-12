/*
 *
 * { type: 'AUTO_COMPLETE', payload: 'c', meta: {debounce: 50}}
 *
 */
const pending = {}

const debounceMiddleware = ({getState, dispatch}) => next => action => {
	const {debounce} = action.meta || {};
	if(!debounce){
		next(action);
	}
	
	// handle debounce
	if(pending[action.type]){
		clearTimeout(pending[action.type]);
	}

	pending[action.type] = setTimeout(
		()=> {
			delete pending[action.type];
			next(action);
		}, debounce
	)
}

export default debounceMiddleware;
