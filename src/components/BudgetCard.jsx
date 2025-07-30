import React from 'react'

function BudgetCard ({budget}){
  return (
    <div>
        
        <p>{budget.name}</p>
        <p> Category:{budget.category}</p>
        <p>Target amount:{budget.targetAmount}</p>
    </div>
  )
}

export default BudgetCard