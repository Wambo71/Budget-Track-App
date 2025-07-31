
import React, {useState} from 'react'

const BudgetForm = () => {

    const[formData, setFormData]= useState({
        name : "",
        category: "",
        targetAmount: 0,
        deadline: "",
        cretedAt : ""
    })

  return (
    <div>
        <form>
            <label htmlFor="">Name</label>
            <input type="text" />
            <br />

            <label htmlFor="">Category</label>
            <input type="text" />
            <br />

            <label htmlFor="">TargetAmount</label>
            <input type="number" />
            <br />

            <label htmlFor="">Deadline</label>
            <input type="number" />
            <br />

            <label htmlFor="">Created At</label>
            <input type="number" />
            <br />

            <button type='submit'>Add budget</button>
        </form>
    </div>
  )
}

export default BudgetForm