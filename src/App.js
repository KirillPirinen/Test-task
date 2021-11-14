import MainTable from "./components/MainTable/MainTable";
import { InvoiceContextProvider } from "./context/InvoiceContext";

function App() {
  return (
    <div className="container my-5">
      <InvoiceContextProvider>
        <MainTable/>
      </InvoiceContextProvider>
    </div>  
  );
}

export default App;
