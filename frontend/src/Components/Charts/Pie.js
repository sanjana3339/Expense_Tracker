import React from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useGlobalContext } from '../../Context/globalContext';
import './Pie.css';

ChartJs.register(ArcElement, Tooltip, Legend);

function PieChart() {
    const { incomes, expenses } = useGlobalContext();

    // Helper function to group data by category and sum amounts
    const groupByCategory = (data) => {
        const categoryTotals = {};
        data.forEach((item) => {
            const { category, amount } = item;
            if (category in categoryTotals) {
                categoryTotals[category] += amount;
            } else {
                categoryTotals[category] = amount;
            }
        });
        return categoryTotals;
    };

    // Get the total amounts for each category for income and expenses
    const incomeCategories = groupByCategory(incomes);
    const expenseCategories = groupByCategory(expenses);

    // Prepare data for the Pie chart
    const incomeData = {
        labels: Object.keys(incomeCategories),
        datasets: [
            {
                label: 'Income by Category',
                data: Object.values(incomeCategories),
                backgroundColor: [
                    '#4caf50', '#ff9800', '#2196f3', '#9c27b0', '#f44336', '#00bcd4'
                ],
                hoverBackgroundColor: [
                    '#66bb6a', '#ffb74d', '#42a5f5', '#ab47bc', '#ef5350', '#26c6da'
                ],
            },
        ],
    };

    const expenseData = {
        labels: Object.keys(expenseCategories),
        datasets: [
            {
                label: 'Expenses by Category',
                data: Object.values(expenseCategories),
                backgroundColor: [
                    '#f44336', '#ffeb3b', '#ff5722', '#009688', '#673ab7', '#3f51b5'
                ],
                hoverBackgroundColor: [
                    '#ef5350', '#fff176', '#ff7043', '#26a69a', '#9575cd', '#5c6bc0'
                ],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18,  // Increase legend font size
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ₹${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="pie-chart">
            <div className='pie'>
                <h2>Income by Category</h2>
                <Pie data={incomeData} options={options} />
            </div>
            <div className='pie'>
                <h2>Expenses by Category</h2>
                <Pie data={expenseData} options={options} />
            </div>
        </div>
    );
}

export default PieChart;
