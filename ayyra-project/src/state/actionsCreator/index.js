export const depositMoney = (amount) =>{
	return (dispatch) => {
		dispatch({
			type : "depositMoney",
			payload : amount
		})
	}
}
export const withdrawMoney = (amount) =>{
	return (dispatch) => {
		dispatch({
			type : "withdrawMoney",
			payload : amount
		})
	}
}