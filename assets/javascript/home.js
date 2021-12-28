// Chart Home
let labelsFeeHome2 = ['PQL', 'PVS', 'Tiền thuê', 'Tiền xe', 'Điện', 'Nước'];
let dataFeeHome2 = [36.15, 2.41, 36.15, 16.86, 2.63, 5.8];
let colorsFeeHome2 = ['#36CAAB', '#44f141', '#a06cd5', '#f75c5c','#ffa640', '#6E9AED'];

var chartFeeHome2 = document.getElementById("chart-fee-home2").getContext('2d');

let chartHome2 = new Chart(chartFeeHome2, {
    type: 'doughnut',
    data: {
        labels: labelsFeeHome2,
        datasets: [ {
            data: dataFeeHome2,
            backgroundColor: colorsFeeHome2
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
})