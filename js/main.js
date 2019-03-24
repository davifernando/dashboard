const colors = ["#0076F4", "#009EF9", "#00C6E4", "#00D9FF"];

function bindArchiveChartTemplate(title, color, chartData) {
    return '<div> <p class="legend--topic"><span class="icon-circle" style="border-color:' + color + '"></span>'+title+'</p> <p>'+chartData[0].value+'</p> </div>';
}

var archiveChart = bb.generate({
    data: {
        columns: [
            ["data1", 100],
            ["data2", 420],
            ["data3", 320],
            ["data4", 220]
        ],
        type: "donut"
    },
    color: {
        pattern: colors
    },
    donut: {
        label: {
            show: false
        }
    },
    bindto: "#archive-number-chart",
    legend: {
        contents: {
            bindto: "#archive-number-legend",
            template: bindArchiveChartTemplate
        }
    }
});

var archiveValueChart = bb.generate({
    data: {
        columns: [
            ["data1", 100],
            ["data2", 420],
            ["data3", 320],
            ["data4", 220]
        ],
        type: "donut"
    },
    color: {
        pattern: colors
    },
    donut: {
        label: {
            show: false
        }
    },
    bindto: "#archive-value-chart",
    legend: {
        contents: {
            bindto: "#archive-value-legend",
            template: bindArchiveChartTemplate
        }
    }
});

const barChart = bb.generate({
    data: {
      columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50],
      ["data3", 130, -150, 200, 300, -200, 100]
      ],
      type: "bar"
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    bindto: "#BarChart"
  });
  