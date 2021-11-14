import { useInvoiceContext } from "../../context/InvoiceContext";

const MainRow = ({meta:{invoice, from, to, reciever, status}, index, update}) => {
  const {deleteInvoice} = useInvoiceContext()

  const deleteHandler = (e) => {
    e.preventDefault();
    deleteInvoice(invoice)
  }
  const updateHandler = (e) => {
    e.preventDefault()
    update()
  }

  return (
    <tr>
      <td><input name={index} type="checkbox" value={invoice}></input></td>
      <td>{index+1}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{reciever}</td>
      <td>{status}</td>
      <td>
        <a onClick={updateHandler} href="update">Изменить</a> 
        &nbsp; | &nbsp;     
        <a onClick={deleteHandler} href="delete">Удалить</a>
      </td>
    </tr>
  )
}

export default MainRow;
