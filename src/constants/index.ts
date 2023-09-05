import { ApexOptions } from 'apexcharts';
import { chartType } from '../utils/Types/Dashboard.types';

export const drawerWidth = '225px';
export const gridSpacing = 3;

export const ChartDataMonth = {
  type: 'line' as chartType,
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: 'Total Order',
      },
      marker: {
        show: false,
      },
    },
  } as ApexOptions,
  series: [
    {
      name: 'series1',
      data: [45, 66, 41, 89, 25, 44, 9, 54],
    },
  ],
};

export const ChartDataYear = {
  type: 'line' as chartType,
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: 'Total Order',
      },
      marker: {
        show: false,
      },
    },
  } as ApexOptions,
  series: [
    {
      name: 'series1',
      data: [35, 44, 9, 54, 45, 66, 41, 69],
    },
  ],
};

export const ChartDataBar = {
  height: 480,
  type: 'bar' as chartType,
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    fill: {
      type: 'solid',
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
  } as ApexOptions,
  series: [
    {
      name: 'Investment',
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
    },
    {
      name: 'Loss',
      data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
    },
    {
      name: 'Profit',
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
    },
    {
      name: 'Maintenance',
      data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0],
    },
  ],
};

export const ChartDataArea = {
  type: 'area' as chartType,
  height: 95,
  options: {
    chart: {
      id: 'support-chart',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: 'Ticket ',
      },
      marker: {
        show: false,
      },
    },
  } as ApexOptions,
  series: [
    {
      data: [0, 15, 10, 50, 30, 40, 25],
    },
  ],
};
