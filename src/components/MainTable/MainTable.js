import { useState } from "react";
import { useInvoiceContext } from "../../context/InvoiceContext";
import MainRow from "../MainRow/MainRow";
import { Modal } from "../Modal/Modal";
import { NewInvoice } from "./subComponents/NewInvoice";
import { UpdateInvoice } from "./subComponents/UpdateInvoice";
import styles from "./styles.module.css";

const MainTable = () => {
  const {getAllData, newInvoice, deleteInvoice, updateInvoice, sortInvoiceASC, sortInvoiceDESC} = useInvoiceContext();
  const {invoices} = getAllData()
  const [modal, setModal] = useState({type:false});

  const newInvoiceHandler = () => {
    setModal(prev=>({...prev, type:'new'}))
  }

  const submitHandler = (e, input) => {
    e.preventDefault();
    if(e.target.name === 'new') {
    newInvoice(Object.fromEntries(new FormData(e.target)))
    setModal({type:false})
    } else if (e.target.name === 'update') {
      updateInvoice(input)
    setModal({type:false})
    }
  }

  const bulkSubmit = (e) => {
    e.preventDefault();
    const rawData = Object.fromEntries(new FormData(e.target));
    const type = rawData.type;
    delete rawData.type
    if(type === "Удалить") deleteInvoice(...Object.values(rawData))
  }

  const sortHandler = (e) => {
    if(e.target.dataset.asc) {
      sortInvoiceASC(e.target.dataset.asc)
    } else if (e.target.dataset.desc) {
      sortInvoiceDESC(e.target.dataset.desc)
    }
  }

  return (
  <>
  <button onClick={newInvoiceHandler} className="btn btn-info">Создать накладную</button>
  <form onSubmit={bulkSubmit}>
  <table className="table caption-top">
    <caption>List of invoices</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">№</th>
        <th scope="col">Откуда <span data-asc="from" onClick={sortHandler} className={styles['sort-asc']}></span><span data-desc="from" onClick={sortHandler} className={styles['sort-desc']}></span></th>
        <th scope="col">Куда <span data-asc="to" onClick={sortHandler} className={styles['sort-asc']}></span><span data-desc="to" onClick={sortHandler} className={styles['sort-desc']}></span></th>
        <th scope="col">Получатель <span data-asc="reciever" onClick={sortHandler} className={styles['sort-asc']}></span><span data-desc="reciever" onClick={sortHandler} className={styles['sort-desc']}></span></th>
        <th scope="col">Статус <span data-asc="status" onClick={sortHandler} className={styles['sort-asc']}></span><span data-desc="status" onClick={sortHandler} className={styles['sort-desc']}></span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {invoices?.map((e, i)=><MainRow update={()=>setModal({type:'update', meta:e})} index={i} key={e.invoice} meta={e}/>)} 
    </tbody>
  </table>
  <select name="type">
    <option value="Удалить">
      Удалить
    </option>
  </select>
  &nbsp;&nbsp;
  <button className="btn btn-info">Применить</button>
  </form>

  <Modal visible={modal.type} deactivate={()=>setModal({type:false})}>
    {
      modal.type === "new" ? <NewInvoice submitHandler={submitHandler}/> :
      modal.type === "update" ? <UpdateInvoice meta={modal.meta} submitHandler={submitHandler} deactivate={()=>setModal({type:false})}/>
      : null
    }
  </Modal>
  </>
  )
}

export default MainTable;
