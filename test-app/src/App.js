import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/layout";
import { Typography } from "@mui/material";

function App() {
	return (
		<BrowserRouter>
	
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}	 />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
