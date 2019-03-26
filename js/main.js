const blueColors = ["#0076F4", "#009EF9", "#00C6E4", "#00D9FF"];
const colors = ["#309DF6", "#FE1E3D", "#36E8A1"];
const shortMonths = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const R3 = d3.formatDefaultLocale({
    "decimal": ",",
    "thousands": ".",
    "grouping": [3],
    "currency": ["R$ ", ""],
    "dateTime": "%a %b %e %X %Y",
    "date": "%m/%d/%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "months": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "November", "Dezembro"],
    "shortMonths": shortMonths  
});

function bindArchiveChartTemplate(title, color, chartData) {
    return '<div> <p class="legend--topic"><span class="icon-circle" style="border-color:' + color + '"></span>'+title+'</p> <p>'+chartData[0].value+'</p> </div>';
}

function bindNormalLegend(title, color) {
    return '<div><p class="legend--topic"><span class="icon-circle" style="border-color: '+color+'"></span>'+title+'</p></div>'
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
        pattern: blueColors
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
        pattern: blueColors
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

const joinChart = bb.generate({
    data: {
      columns: [
        ["Entrada", 1300],
        ["Saída", -200],
        ["Lucro Bruto / Déficit Bruto", 600]
      ],
      type: "bar"
    },
    bar: {
        padding: 100,
        width: {
            ratio: 0.3
        }, 
        radius: {
            ratio: 0.08
        }
    },
    color: {
        pattern: colors
    },
    axis: {
        y: {
            tick: {
                count: 5,
                format: function(x) { 
                    return R3.format("$,.2f")(x); 
                },
                max: 800
            }
        },
        x: {
            show: false
        }
    },
    bindto: "#join-chart",
    tooltip: {
        format: {
            title: function(){
                return "Entrada e saída"
            }
        }
    },
    legend: {
        contents: {
            bindto: "#join-legend",
            template: bindNormalLegend
        }
    }
});

const buySellChart = bb.generate({
    data: {
        x: "x",
        columns: [
            ["x", "2013-01-01", "2013-02-02", "2013-03-03", "2013-04-04", "2013-05-05", "2013-06-06"],
            ["Entrada", 100, 200, 100, 400, 150, 250],
            ["Saída", 130, 340, 200, 500, 250, 350],
            ["Saldo", 100, 340, 100, 500, 150, 600]
        ],
        type: 'spline'
    },
    padding: {
        right: 10
    },
    axis: {
        x: {
            type: "timeseries",
            tick: {
                format: function(x) {
                    // format string is also available for timeseries data
                    // format: "%Y"
                    return shortMonths[x.getMonth()];
                }
            }
        },
        y: {
            tick: {
                count: 4,
                min: 0,
                format: function(x) { 
                    return R3.format("$,.2f")(x);
                }
            },
        }
    },
    color: {
        pattern: colors
    },
    legend: {
        contents: {
            bindto: "#buy-sell-legend",
            template: bindNormalLegend
        }
    },
    point: {
        r: 4
    },
    bindto: "#buy-sell-chart"
});

const providersData = [
    {
        company_name: 'Empresa 1',
        value:  30
    },
    {
        company_name: 'Empresa 2',
        value:  200
    },
    {
        company_name: 'Empresa 3',
        value:  100
    },
    {
        company_name: 'Empresa 4',
        value:  170
    },
    {
        company_name: 'Empresa 5',
        value:  150
    },
    {
        company_name: 'Empresa 6',
        value:  250
    },
    {
        company_name: 'Empresa 7',
        value:  300
    },
];

const providersChart = bb.generate({
    bindto: "#providers-chart",
    data: {
        type: "bar",
        columns: [
            [ "data1", ...providersData.map(provider => provider.value)]
        ]
    },
    bar: {
        width: 36,
    },
    axis: {
        x: { 
            type: 'category',
            categories: providersData.map(provider => 
                provider.company_name + "\n" + R3.format("$,.2f")(provider.value)
            )
        },
        y: {
            show: false
        },
        rotated: true
    },
    color: {
        pattern: ["#4981FD"]
    },
    legend: {
        show: false
    }
});
