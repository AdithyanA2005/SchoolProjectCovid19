new Chart(document.getElementById("linechart"), {
	type: 'line',
	data: {
		labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
		datasets: [{
			label: 'Kerala',
			backgroundColor: window.chartColors.navy,
			borderColor: window.chartColors.navy,
			data: [241,497,1269,4442,23613,75385,198106,433105,100],
			fill: false,
		}, {
			label: 'Himachal Pradesh',
			fill: false,
			backgroundColor: window.chartColors.purple,
			borderColor: window.chartColors.purple,
			data: [10,40,20,35,25,50,10,70],
		}]
	},
	options: {
		responsive: true,
		// title: {
		// 	display: true,
		// 	text: 'Chart.js Line Chart'
		// },
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: ''
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: ''
				}
			}]
		}
	}
});
