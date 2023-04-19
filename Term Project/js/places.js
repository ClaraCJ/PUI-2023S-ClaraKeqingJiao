google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Cities'],
        ['France', 1],
        ['United States', 5],
        ['Italy', 4],
        ['Spain', 1],
        ['Portugal', 1],
        ['China', 12],
        ['Taiwan', 1]
    ]);

    var options = {
        backgroundColor: '#5c1715',
        colorAxis: {
            minValue: 0,
            maxValue: 20,
            colors: ['#9D7473', '#AE8B8A']
        },
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'regionClick', function (eventData) {
        if (eventData.region === 'US') {
            // Show the "united-states-albums" box after clicking on the United States
            document.querySelector('.united-states-albums').style.display = 'block';
        } else {
            // Hide the "united-states-albums" box when clicking on any other region
            document.querySelector('.united-states-albums').style.display = 'none';
        }

        if (eventData.region === 'CN') {
            // Show the "china-albums" box after clicking on China
            document.querySelector('.china-albums').style.display = 'block';
        } else {
            // Hide the "china-albums" box when clicking on any other region
            document.querySelector('.china-albums').style.display = 'none';
        }

        if (eventData.region === 'IT') {
            // Show the "italy-albums" box after clicking on Italy
            document.querySelector('.italy-albums').style.display = 'block';
        } else {
            // Hide the "italy-albums" box when clicking on any other region
            document.querySelector('.italy-albums').style.display = 'none';
        }
    });

    google.visualization.events.addListener(chart, 'onmouseout', function (eventData) {
        // Hide the "united-states-albums" box when the mouse hovers out
        document.querySelector('.united-states-albums').style.display = 'none';
        // Hide the "china-albums" box when the mouse hovers out
        document.querySelector('.china-albums').style.display = 'none';
        // Hide the "italy-albums" box when the mouse hovers out
        document.querySelector('.italy-albums').style.display = 'none';
    });
}
