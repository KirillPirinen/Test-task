import { ADD_NEW_INVOICE, ASC_SORT, BULK_DELETE_INVOICE, DESC_SORT, GET_ALL_DATA, UPDATE_INVOICE } from "./types"

export const invoiceReducer = (state, action) => {
  switch (action.type) {

    case GET_ALL_DATA: return state;  

    case ADD_NEW_INVOICE: return {...state, invoices:[...state.invoices, action.payload]}

    case BULK_DELETE_INVOICE: return {...state, 
        invoices: state.invoices.filter(e => !action.payload.includes(e.invoice))
      }
    case UPDATE_INVOICE: return {...state,
      invoices: state.invoices.map(e=> e.invoice === action.payload.invoice ? action.payload : e)
    }

    case ASC_SORT: 
    return {...state, 
    invoices: [...state.invoices].sort((a,b) => {
      const first = a[action.payload].toLowerCase()[0]
      const second = b[action.payload].toLowerCase()[0]
      if(first > second) return 1
      else if (first < second) return -1
      else return 0
    })
    }

    case DESC_SORT: return {...state, 
      invoices: [...state.invoices].sort((a,b) => {
      const first = a[action.payload].toLowerCase()[0]
      const second = b[action.payload].toLowerCase()[0]
      if(first < second) return 1
      else if (first > second) return -1
      else return 0
      })
      }
  
    default: return state
  }
}
