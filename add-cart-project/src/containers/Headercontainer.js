import header from "../components/header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	data:state.cardItems

})
const mapDispatchToProps=dispatch=>({
	
})
export default connect(mapStateToProps,mapDispatchToProps)(header)