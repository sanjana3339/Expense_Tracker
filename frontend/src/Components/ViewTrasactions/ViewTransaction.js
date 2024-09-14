import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import '../../Layout.css';
import './ViewTransaction.css';

function ViewTransaction() {
    const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpense, transactionHistory } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpense();
    }, []);

    const [...history] = transactionHistory();

    return (
        <div className="view-transac">
            <div className='Inner-layout'>
                <h1>Transaction History</h1>
                <div className="history-con">
                    {history.map((item) => {
                        const { _id, title, amount, type } = item;
                        return (
                            <div key={_id} className="history-item">
                                <p style={{
                                    color: type === 'expense' ? 'red' : 'var(--color-green)'
                                }}>
                                    {title}
                                </p>
                                <p style={{
                                    color: type === 'expense' ? 'red' : 'var(--color-green)'
                                }}>
                                    {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ViewTransaction;
