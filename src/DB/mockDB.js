export const statuses = [
  {id:1, name:"Ожидает отправки"},
  {id:2, name:"Доставлен"},
  {id:3, name:"Принят на склад"},
  {id:4, name:"Возвращен"},
  {id:5, name:"В пути"}
]

const DB = {
  invoices:[]
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("database"));
  return stateFromLS || DB
};

export default getInitState;
