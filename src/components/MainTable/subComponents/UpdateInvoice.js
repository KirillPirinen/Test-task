import { useState } from "react";
import { useInvoiceContext } from "../../../context/InvoiceContext";
import { statuses } from "../../../DB/mockDB"

export const UpdateInvoice = ({submitHandler, meta, deactivate}) => {
  const [{from, to, reciever, status}, setInput] = useState(meta)

  const {deleteInvoice} = useInvoiceContext()

  const changeHandler = ({target}) => {
    setInput(prev=>({...prev, [target.name]: target.value}))
  }

  const deleteHandler = () => {
    deleteInvoice(meta.invoice)
    deactivate()
  }

  return (
    <>
    <form name="update" onSubmit={(e)=>submitHandler(e, {invoice:meta.invoice, from, to, reciever, status})}>
      <label>
        Откуда
        <input onChange={changeHandler} name="from" type="text" value={from}></input>
      </label>
      <label>
        Куда
        <input onChange={changeHandler} name="to" type="text" value={to}></input>
      </label>
      <label>
        Получатель
        <input onChange={changeHandler} name="reciever" type="text" value={reciever}></input>
      </label>
      <label>
        Статус
      <select onChange={changeHandler} name="status">
        {statuses.map(e=>{
          if(e.name === status) {
            return <option key={e.id} value={e.name} selected>{e.name}</option>
          } else {
            return <option key={e.id} value={e.name}>{e.name}</option>
          }
        })}
      </select>
      </label>
      &nbsp;&nbsp;
      <button>Сохранить</button>
      </form>
      <br/>
      <button onClick={deleteHandler}>Удалить</button>
    </>
  )
}
