import React, { useEffect ,useState} from 'react'
import BudgetCard from './BudgetCard'

const API_URL = "http://localhost:3000/budgets"

const BudgetList = () => {
    const[budgets, setBudgets] = useState([])

     useEffect(()=>{
        fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        setBudgets(data)
    })
    .catch(error =>console.error("error",error))
     },[]
    )
  return (
    <div>
        
        {budgets.map((budget)=> (
            <BudgetCard key={budget.id} budget={budget} />
        )
        )}
    </div>
  )
}

export default BudgetList