import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {
  ChartContainer
} from './styles'

interface ChartItemProps {
  series: any,
  color: string
}

export const ChartItem:React.FC<ChartItemProps> = (props: ChartItemProps) => {
  const { color, series } = props

  const options: any = {
    chart: {
      height: 100,
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      background: 'transparent'
    },
    legend: {
      show: false,
      itemMargin: {
        horizontal: 0,
        vertical: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    xaxis: {
      labels: {
        show: false
      },
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      floating: false,
    
      labels: {
        show: false
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: [],
      },
    },
    colors: [color],
    tooltip: {
      enabled: true,
      custom: function({series, seriesIndex, dataPointIndex, w}: any) {
        return `<div classname="custom-tooltip" style='padding: 10px;font-size: 12px'>
          <div>
            <span>Price: </span>
            <span>${series[seriesIndex][dataPointIndex]} USD</span>
          </div>
          <div>
            <span>Date:</span>
            <span>08 Mar 2022</span>
          </div>
        </div>`
      }
    },
    grid: {
      show: false,
    },
    theme: {
      mode: 'dark', 
    }
  }

  return (
    <ChartContainer>
      <ReactApexChart options={options} series={series} type="line" />
    </ChartContainer>
  )
}

