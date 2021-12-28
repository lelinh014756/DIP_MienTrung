
// Chart Processing Status
let labels1 = ['Đang xử lý', 'Đã hoàn thành', 'Đã đóng'];
let data1 = [62, 23, 15];
let colors1 = ['#6E9AED', '#44f141', '#f75c5c'];

let chartProcessStatus = document.getElementById("chart-processing-status").getContext('2d');

let chart1 = new Chart(chartProcessStatus, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
})



// Chart Level
let labels2 = ['Khẩn cấp', 'Cao', 'Trung bình', 'Thấp', 'Không quan trọng'];

let chartLevel = document.getElementById("chart-level").getContext('2d');

let chart2 = new Chart(chartLevel, {
    type: 'radar',
    data: {
        labels: labels2,
        datasets: [
            {
                label: 'Data1',
                fill: true,
                backgroundColor: "rgba(179, 181, 198, 0.2)",
                borderColor: "rgba(110, 154, 237, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(110, 154, 237, 1)",
                data: [50, 12, 55, 7, 29]
            },
            {
                label: 'Data2',
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(247, 92, 92, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(247, 92, 92, 1)",
                data: [51, 10, 32, 20, 44]
            }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
})


// Chart Source
let labels3 = ['Điện thoại', 'Email', 'CSKH', 'Web', 'Tự đến'];
let data3 = [182.6, 130.3, 126.3, 130, 59];
let colors3 = ['#6E9AED', '#36CAAB', '#44f141', '#a06cd5', '#f75c5c'];

let chartSource = document.getElementById("chart-source").getContext('2d');

let chart3 = new Chart(chartSource, {
    type: 'bar',
    data: {
        labels: labels3,
        datasets: [ {
            data: data3,
            backgroundColor: colors3
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        legend: {
            display: false
        }
    }
})



// Chart source2
let labels4 = ['Điện thoại', 'Email', 'CSKH', 'Web', 'Tự đến'];
let data4 = [182.6, 130.3, 126.3, 130, 59];
let colors4 = ['#6E9AED', '#36CAAB', '#44f141', '#a06cd5', '#f75c5c'];

let chartSource2 = document.getElementById("chart-source2").getContext('2d');

let chart4 = new Chart(chartSource2, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Population of the European Union (in mio)",
            display: true
        },
        legend: {
            display: false
        }
    }
})


// Chart Column
let labelsChartCol = ['VinGroup', 'Hoàng Anh Gialai', 'Cty ABC', 'Tô Thuận', 'Depo'];
let dataChartCol = [122.6, 198.3, 56.3, 126, 87.23];
let colorsChartCol = ['#6E9AED', '#36CAAB', '#44f141', '#a06cd5', '#f75c5c'];

let chartColumn = document.getElementById("chart-column").getContext('2d');

let chartColumn1 = new Chart(chartColumn, {
    type: 'bar',
    data: {
        labels: labelsChartCol,
        datasets: [ {
            data: dataChartCol,
            backgroundColor: colorsChartCol
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        legend: {
            display: false
        }
    }
})

// Chart Pie
let labelsChartPia1 = ['VinGroup', 'Hoàng Anh Gialai', 'Cty ABC', 'Tô Thuận', 'Depo'];
let dataChartPia1 = [20.76, 33.58, 9.54, 21.34, 14.78];
let colorsChartPia1 = ['#6E9AED', '#36CAAB', '#44f141', '#a06cd5', '#f75c5c'];

let chartPie = document.getElementById("chart-pie").getContext('2d');

let chartPie1 = new Chart(chartPie, {
    type: 'doughnut',
    data: {
        labels: labelsChartPia1,
        datasets: [ {
            data: dataChartPia1,
            backgroundColor: colorsChartPia1
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
})

