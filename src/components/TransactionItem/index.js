import './index.css'

const TransactionItem = props => {
  const {eachTransactionItem, onDeleteTransactionItem} = props
  const {id, title, amount, type} = eachTransactionItem

  const onClickDeleteTransaction = () => {
    onDeleteTransactionItem(id)
  }
  return (
    <li className="transactionItem-container">
      <p className="sub-item-values">{title}</p>
      <p className="sub-item-values">{amount}</p>
      <p className="sub-item-values">{type}</p>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
          onClick={onClickDeleteTransaction}
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
