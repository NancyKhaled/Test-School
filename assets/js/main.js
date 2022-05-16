/* =======================================================
    * Template Name: Nancy Khaled Portfolio
    * Template URL: https://nancy-khaled.netlify.app/
    * Author: Nancy Khaled
    ======================================================== */

/*----------- chart ------------ */
const labels = [
    '19/5',
    '18/4',
    '17/6',
    '20/7',
    '22/7',
    '30/8',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Adam',
        backgroundColor: 'rgb(2 107 176 / 20%)',
        borderColor: 'rgb(255, 99, 132)',
        data: [60, 62, 58, 59, 57, 53, 46],
    }, {
        label: 'Average',
        backgroundColor: 'rgb(99 2 176 / 20%)',
        borderColor: 'rgb(255, 99, 132)',
        data: [63, 55, 50, 52, 52, 58, 50],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


