import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    incomeAndExpenseList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  addExpenseInList = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newList = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type,
    }
    this.setState(prevState => ({
      incomeAndExpenseList: [...prevState.incomeAndExpenseList, newList],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransactionItem = id => {
    this.setState(prevState => ({
      incomeAndExpenseList: prevState.incomeAndExpenseList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {title, amount, type, incomeAndExpenseList} = this.state
    return (
      <div className="bg-container">
        <div className="header-container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="welcomeNote">
            Welcome back to your
            <span style={{color: '#0b69ff'}}>Money Manger</span>
          </p>
        </div>
        <MoneyDetails incomeAndExpenseList={incomeAndExpenseList} />
        <div className="input-display-container">
          <div className="input-container">
            <form className="inputForm" onSubmit={this.addExpenseInList}>
              <h1 className="sub-container-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                placeholder="TITLE"
                type="text"
                className="input-box"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                placeholder="AMOUNT"
                type="text"
                className="input-box"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="income-type" className="label">
                TYPE
              </label>
              <select
                id="income-type"
                className="input-box"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option
                    key={eachItem.optionId}
                    value={eachItem.optionId}
                    id={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="display-container">
            <h1 className="sub-container-heading">History</h1>
            <div className="header-titles">
              <p className="item-titles">Title</p>
              <p className="item-titles">Amount</p>
              <p className="item-titles">Type</p>
            </div>
            <ul className="unOrdered-list">
              {incomeAndExpenseList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  eachTransactionItem={eachItem}
                  onDeleteTransactionItem={this.onDeleteTransactionItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
