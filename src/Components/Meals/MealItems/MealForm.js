import React from 'react'
import classes from "./MealForm.module.css"
const MealForm = () => {
  return (
    <div className={classes.form}>
      <label htmlFor='amount'>Amount</label>
      <input type="text" id='amount' />
    </div>
  )
}

export default MealForm