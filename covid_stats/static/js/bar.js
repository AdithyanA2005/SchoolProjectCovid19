new Chart(document.getElementById("barchart"), {
	type: 'bar',
	data: {
		labels: ['February','March','April', 'May', 'June', 'July', 'August', 'September', 'October'],
		datasets: [{
			data: [7,241,497,1269,4442,23613,75385,198106,433105],
			label: 'Kerala',
			backgroundColor: "#4755AB",
			borderWidth: 1,
		}, {
			data: [0,57,113,182,837,2512,5154,14457,20787],
			label: 'Himachal Pradesh',
			backgroundColor: "#c500e3",
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
	}
});
