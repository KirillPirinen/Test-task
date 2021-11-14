import { statuses } from "../../../DB/mockDB"

export const NewInvoice = ({submitHandler}) => {
  return (
    <>
    <form name="new" onSubmit={submitHandler}>
      <label>
        Откуда
        <input name="from" type="text"></input>
      </label>
      <label>
        Куда
        <input name="to" type="text"></input>
      </label>
      <label>
        Получатель
        <input name="reciever" type="text"></input>
      </label>
      <label>
        Статус
      <select name="status">
        {statuses.map(e=><option key={e.id} value={e.name}>{e.name}</option>)}
      </select>
      </label>
      &nbsp;&nbsp;
      <button>Сохранить</button>
      </form>
    </>
  )
}
