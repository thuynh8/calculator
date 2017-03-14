function toggleExtraOptionsBtn() {
    var extraOptionsButton = document.querySelector('#btn-extra-options');
        var iconButton = document.querySelector('#test');
        extraOptionsButton.onclick = function() {
            if (extraOptionsButton.textContent === '+ Add More Criteria') {
                extraOptionsButton.textContent = '- Hide More Criteria';
            } else {
                extraOptionsButton.innerHTML = '+ Add More Criteria';
            }
        }
}

function chart() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
        "Principle",
        "Other Fees",
        "Interest"
        ],
        datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    },
    options: {
        animation:{
            animateScale: true
        }
    }
});
}