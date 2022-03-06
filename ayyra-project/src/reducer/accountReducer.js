const reducer = (state = 0, action) => {
	switch (action.type) {
		case "depositMoney" :
			return  state + action.payload;
			 case "withdrawMoney" :
				 return state - action.payload;
				 default :
				 return state
	}
};
export default reducer;