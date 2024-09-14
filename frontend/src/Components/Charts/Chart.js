import React, { useState } from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Chart.css';
import { useGlobalContext } from '../../Context/globalContext';
import { dateFormatddmm, getStartOfWeek, getStartOfMonth } from '../../Utils/dateFormat';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Chart() {
    const { incomes, expenses } = useGlobalContext();
    const [timeRange, setTimeRange] = useState('daily');

    // Helper function to aggregate data by time period
    const aggregateData = (data, type) => {
        const aggregation = {};

        data.forEach((item) => {
            const { amount, date } = item;
            let key;

            if (type === 'daily') {
                key = dateFormatddmm(date, 'DD/MM');
            } else if (type === 'weekly') {
                key = getStartOfWeek(date);
            } else if (type === 'monthly') {
                key = getStartOfMonth(date);
            }

            if (!aggregation[key]) {
                aggregation[key] = 0;
            }
            aggregation[key] += amount;
        });

        return aggregation;
    };

    const aggregatedIncome = aggregateData(incomes, timeRange);
    const aggregatedExpenses = aggregateData(expenses, timeRange);

    const labels = Object.keys(aggregatedIncome);

    const data = {
        labels,
        datasets: [
            {
                label: 'Income',
                data: labels.map((label) => aggregatedIncome[label] || 0),
                backgroundColor: 'green',
                tension: 0.2,
            },
            {
                label: 'Expenses',
                data: labels.map((label) => aggregatedExpenses[label] || 0),
                backgroundColor: 'red',
                tension: 0.2,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,  // Increase font size of the legend
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14,  // Increase font size of the x-axis labels
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 14,  // Increase font size of the y-axis labels
                    },
                },
            },
        },
    };

    return (
        <div className='Chart'>
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            
            <Line data={data} options={options} />
        </div>
    );
}

export default Chart;
