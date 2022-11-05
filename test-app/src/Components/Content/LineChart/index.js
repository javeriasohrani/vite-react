import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {faker} from '@faker-js/faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		},
		title: {
			display: false,
			text: "Chart.js Line Chart",
		},
	},
};

const labels = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.datatype.number({ min: 1000, max: 5000 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		}
	],
};

export function LineChart() {
	return (
		<div style={{marginBottom: '60px',width:"900px", marginLeft: "20px"
	}}>
			<Line options={options} data={data} />
		</div>
	);
}
