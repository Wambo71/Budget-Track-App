import React from "react";

import BudgetList from "./components/BudgetList";
import BudgetForm from "./components/BudgetForm";


function App(){
return(
  <div>
    
  <h2>Personal Budget Tracker</h2>
    
    <BudgetForm/>
    <BudgetList/>
  </div>
)
}

export default App