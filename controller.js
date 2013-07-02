$(document).ready(function () {
    // JSONP doesn't work with HBase REST
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: 'http://paperprototype.cloudapp.net/UserIncrease.php',
        data: {},
        success: function (obj) {
            alert(obj);
        }
    });

    var data = {
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff"
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
            }
        ]
    }

    // Get this format from web service
    var result = [
        { date: "2013-07-02", device: 12, user: 11 },
        { date: "2013-07-03", device: 22, user: 21 },
        { date: "2013-07-04", device: 36, user: 31 },
        { date: "2013-07-05", device: 41, user: 31 },
        { date: "2013-07-06", device: 34, user: 21 },
        { date: "2013-07-07", device: 31, user: 21 },
        { date: "2013-07-08", device: 47, user: 47 },
        { date: "2013-07-09", device: 24, user: 20 },
        { date: "2013-07-10", device: 15, user: 12 },
    ];

    data.labels = [];
    data.datasets[0].data = [];
    data.datasets[1].data = [];

    for (var i = 0; i < result.length; i++) {
        data.labels.push(result[i].date);
        data.datasets[0].data.push(result[i].device);
        data.datasets[1].data.push(result[i].user);
    }

    var options = {

        //Boolean - If we show the scale above the chart data			
        scaleOverlay: false,

        //Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps: null,
        //Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        //Number - The scale starting value
        scaleStartValue: null,

        //String - Colour of the scale line	
        scaleLineColor: "rgba(0,0,0,.1)",

        //Number - Pixel width of the scale line	
        scaleLineWidth: 1,

        //Boolean - Whether to show labels on the scale	
        scaleShowLabels: true,

        //Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        //String - Scale label font declaration for the scale label
        scaleFontFamily: "'Arial'",

        //Number - Scale label font size in pixels	
        scaleFontSize: 12,

        //String - Scale label font weight style	
        scaleFontStyle: "normal",

        //String - Scale label font colour	
        scaleFontColor: "#666",

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 3,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //Boolean - Whether to animate the chart
        animation: true,

        //Number - Number of animation steps
        animationSteps: 60,

        //String - Animation easing effect
        animationEasing: "easeOutQuart",

        //Function - Fires when the animation is complete
        onAnimationComplete: null

    }

    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myChart").get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx).Line(data, options);
});
