import { createContext, useContext, useEffect, useReducer } from "react";
import getInitState from "../DB/mockDB";
import { invoiceReducer } from "../reducer/InvoiceReducer";
import { ADD_NEW_INVOICE, ASC_SORT, BULK_DELETE_INVOICE, DESC_SORT, UPDATE_INVOICE } from "../reducer/types";
import { uuid } from 'uuidv4';
const invoiceContext = createContext();

export const InvoiceContextProvider = ({children}) => {
  const [database, dispatch] = useReducer(invoiceReducer, getInitState())

  useEffect(() => {
    localStorage.setItem("database", JSON.stringify(database));
  }, [database]);
  
  const getAllData = () => database;

  const newInvoice = (obj) => {
    obj.invoice = uuid()
    dispatch({type:ADD_NEW_INVOICE, payload:obj})
  }
  const deleteInvoice = (...rest) => {
    dispatch({type:BULK_DELETE_INVOICE, payload:rest})
  }

  const updateInvoice = (obj) => {
    dispatch({type:UPDATE_INVOICE, payload:obj})
  }

  const sortInvoiceASC = (by) => {
    dispatch({type:ASC_SORT, payload:by})
  }

  const sortInvoiceDESC = (by) => {
    dispatch({type:DESC_SORT, payload:by})
  }

  return (
    <invoiceContext.Provider value={{getAllData, newInvoice, deleteInvoice, updateInvoice, sortInvoiceASC, sortInvoiceDESC}}>
      {children}
    </invoiceContext.Provider>
  )
}

export const useInvoiceContext = () => useContext(invoiceContext);
