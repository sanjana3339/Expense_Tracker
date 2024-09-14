import React, { useEffect } from 'react';
import '../../Layout.css';
import './Dashboard.css';
import { useGlobalContext } from '../../Context/globalContext';
import Chart from '../Charts/Chart';
import PieChart from '../Charts/Pie';

function Dashboard() {
    const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpense } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpense();
    }, []);

    return (
        <div className='dashboard'>
            <div className='Inner-layout'>
                <h1>Dashboard</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <PieChart />
                    </div>
                    <div className="history-con">
                        <h2 className="salary-title">Min <span>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>₹{Math.min(...incomes.map(item => item.amount))}</p>
                            <p>₹{Math.max(...incomes.map(item => item.amount))}</p>
                        </div>

                        {/* Min/Max Expense */}
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>₹{Math.min(...expenses.map(item => item.amount))}</p>
                            <p>₹{Math.max(...expenses.map(item => item.amount))}</p>
                        </div>

                        {/* Total Income, Total Expense, and Total Balance */}
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>₹{totalIncome()}</p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>₹{totalExpense()}</p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>₹{totalBalance()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
