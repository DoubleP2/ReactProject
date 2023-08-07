import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';


const Dashboard = () => {

  const history = useHistory();
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );
  const[chartData,setChartData]=useState(
    {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [2003, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }]
    }
  )
  const[chartD,setChartD] = useState({
          
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'N1',
              y: 12,
              goals: [
                {
                  name: 'Expected',
                  value: 14,
                  strokeWidth: 2,
                  strokeDashArray: 2,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'N2',
              y: 40,
              goals: [
                {
                  name: 'Expected',
                  value: 54,
                  strokeWidth: 5,
                  strokeHeight: 10,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'N3',
              y: 50,
              goals: [
                {
                  name: 'Expected',
                  value: 58,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'N4',
              y: 66,
              goals: [
                {
                  name: 'Expected',
                  value: 60,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'N5',
              y: 81,
              goals: [
                {
                  name: 'Expected',
                  value: 66,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
                }
              ]
            },
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
          formatter: function(val, opt) {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals
        
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`
            }
            return val
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
      },
  })
  const [reactChart,setReactChart]=useState(
    {
      
          
        series: [44, 55, 41, 17, ],
        options: {
          chart: {
            width: 380,
            type: 'donut',
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 3,
              blur: 3,
              opacity: 0.2
            }
          },
          stroke: {
            width: 0,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: true
                  }
                }
              }
            }
          },
          labels: ["Elementary", "Intermediate", "Advanced", "Proficient",],
          dataLabels: {
            dropShadow: {
              blur: 3,
              opacity: 0.8
            }
          },
          fill: {
          type: 'pattern',
            opacity: 1,
            pattern: {
              enabled: true,
              style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
            },
          },
          states: {
            hover: {
              filter: 'none'
            }
          },
          theme: {
            palette: 'palette2'
          },
          title: {
            text: "Englishskill's person"
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      }
  )
  return (
    <>
     
    <h2>Employee Regristration List</h2><br></br>
    <Chart options={chartData.options} series={chartData.series} type="area" width={1000} height={500} />
    <h2>Profectional Person in JapaneseSkill</h2>
    <div id="chart">
<ReactApexChart options={chartD.options} series={chartD.series} type="bar" width={900} height={400} />
</div>
<h2>Profectional Person in JapaneseSkill</h2>
<div id="chart">
<ReactApexChart options={reactChart.options} series={reactChart.series} type="donut" width={380} />
</div>
    </>
  )
  }
export default Dashboard
