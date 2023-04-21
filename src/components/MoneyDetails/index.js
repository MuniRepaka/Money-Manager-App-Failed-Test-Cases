import './index.css'

const MoneyDetails = props => {
  const {incomeAndExpenseList} = props
  const Income = incomeAndExpenseList
    .filter(eachItem => eachItem.type === 'INCOME')
    .reduce(
      (PreviousValue, currentValue) => PreviousValue + currentValue.amount,
      0,
    )
  const Expenses = incomeAndExpenseList
    .filter(eachItem => eachItem.type === 'EXPENSES')
    .reduce(
      (PreviousValue, currentValue) => PreviousValue + currentValue.amount,
      0,
    )
  const Balance = Income - Expenses
  return (
    <div className="moneyDetails-container">
      <div className="balance sub-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="amount-display-container">
          <p>Your Balance</p>
          <p className="amount-display" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>
      <div className="income sub-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="icon"
        />
        <div className="amount-display-container">
          <p>Your Income</p>
          <p className="amount-display" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="expense sub-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="amount-display-container">
          <p>Your Expenses</p>
          <p className="amount-display" data-testid="expensesAmount">
            Rs {Expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
