//import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('histogram');
var myChart = echarts.init(chartDom);
var option;

const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};
option = {
  title:{text:'Tweets/retweets frequency'},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Tweets', 'Retweets']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['1', '2', '3', '4', '5','6','7','8','9','10','11<= =<100','101<= =<200',
    '201<= =<300','301<=400','>400']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Tweets',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [8082, 1182, 371, 185, 100, 65, 44, 32, 32, 22, 168, 9, 6, 1, 2]
    },
    {
      name: 'Retweets',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [7167, 1026, 321, 141, 76, 43, 41, 32, 27, 20, 168, 150, 5, 1, 1]
    },
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

// note we need to add the code below to make the chart responsive
// see https://apache.github.io/echarts-handbook/en/concepts/chart-size/
window.onresize = function() {
  myChart.resize();
};

myChart.resize({
  height: 400
});


//line chart


var cDom = document.getElementById('linechart');
var lChart = echarts.init(cDom);
var option;

option = {
  title: {
    text: 'Tweets volume by dates(PTC)'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['4th', '5th', '6th', '7th', '8th']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1:00', '2:00','3:00','4:00','5:00', '6:00','7:00','8:00','9:00',
  '10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00',
'19:00','20:00','21:00','22:00','23:00','0:00']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '4th',
      type: 'line',
      //stack: 'Total',
      data: [null, null, null, null, null,null, null, null,
        3040,2275,2384,2240,2047,1948,1539,1274,
      null, null, null, null, null,null, null, null]
    },
    {
      name: '5th',
      type: 'line',
      //stack: 'Total',
      data: [null, null, null, null, null,null, null, null,
         null, null, null, null, null,7351,4392,3268,
       null, null, null, null, null,null, null, null]
    },
    {
      name: '6th',
      type: 'line',
      //stack: 'Total',
      data: [null, null, null, null, null,null, null, null,
         null, null, 4019,3234,3067,2596,2409,2330,
       null, null, null, null, null,null, null, null]
    },
    {
      name: '7th',
      type: 'line',
      //stack: 'Total',
      data: [null, null, null, null, null,null, null, null,
         null, 3041, 2480, 2174, 2807,2149,1878,1662,
         null, null, null, null, null,null, null, null]
    },
    {
      name: '8th',
      type: 'line',
      //stack: 'Total',
      data: [1540, 1404, 1124, 1140, 1185,1238, 986, 1183,
         912, 963, 1254, 909, 811,635,687,521,
       493,475,610,712,656,678,652,679]
    }
  ]
};

if (option && typeof option === 'object') {
  lChart.setOption(option);
}

// note we need to add the code below to make the chart responsive
// see https://apache.github.io/echarts-handbook/en/concepts/chart-size/
window.onresize = function() {
  lChart.resize();
};

lChart.resize({
  height: 400
});
