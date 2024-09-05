import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const OverviewDetailsServices = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '14%', // Thinner bars
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Home Cleaning',
        'Curtain Cleaning',
        'Carpet Cleaning',
        'Mattress Cleaning',
        'Sofa Cleaning',
        'AC Cleaning',
        'AC Repair',
      ],
    },
    legend: {
      show: false, // Hide legend if not needed
    },
  };

  const series = [
    {
      name: 'Services',
      data: [
        { x: 'Home Cleaning', y: 12, fillColor: '#1E90FF' },
        { x: 'Curtain Cleaning', y: 8, fillColor: '#FF6347' },
        { x: 'Carpet Cleaning', y: 7, fillColor: '#32CD32' },
        { x: 'Mattress Cleaning', y: 6, fillColor: '#FFD700' },
        { x: 'Sofa Cleaning', y: 5, fillColor: '#6A5ACD' },
        { x: 'AC Cleaning', y: 4, fillColor: '#FF69B4' },
        { x: 'AC Repair', y: 3, fillColor: '#8B4513' },
      ],
    },
  ];

  return (
    <div style={{ width: '100%', height: 350 }}>
      <div className="d-flex flex-wrap flex-stack mb-0 card-header flex-nowrap border-0">
        <h3 style={{ padding: "10px 0" }}>Services</h3>
      </div>

      <Chart 
        options={{
          ...options,
          colors: series[0].data.map(item => item.fillColor) // Apply colors from data
        }} 
        series={series} 
        type="bar" 
        height={350} 
      />
    </div>
  );
};

export default OverviewDetailsServices;
