import React from 'react';

import expensesDataStorage from './expensesData.js'

export default function ExpensesMainContent() {

    const [expensesState, setExpensesState] = React.useState({
        id: `${Date.now()}`,
        dateSpent: Date("1/1/2000"),
        amount: 0.0,
        expenseVendor: "",
        expenseDescription: "",
        isFillingIn: false,
        yagni: true
        }
    )

    const [allExpensesArray, setAllExpensesArray] = React.useState(expensesDataStorage.expenses)


    function handleChange(event) {
        const {name, value} = event.target

        setExpensesState(prevExpenseState => {
            return {
                ...prevExpenseState,
                [name]: value,
                isFillingIn: true
            }
        })
    }

    function printOutArray() {
        console.log(Date.now() + " \n\nJSON.stringify(expensesState)")
        console.log(JSON.stringify(expensesState))
    
        console.log("\nJSON.stringify(allExpensesArray)")
        console.log(JSON.stringify(allExpensesArray))
        console.log()
    
    }
 
    function addExpense(event) {

        setAllExpensesArray(prevExpenseArray => {
            return [
            ...prevExpenseArray,
            {
            id: expensesState.id,
            dateSpent: expensesState.dateSpent,
            amount: expensesState.amount,
            expenseVendor: expensesState.expenseVendor,
            expenseDescription: expensesState.expenseDescription,
            yagni: expensesState.yagni
            }
        ]
        }
        )

        setExpensesState(prevExpenseState => {
            return {
                ...prevExpenseState,
                id: `${Date.now()}`,
                dateSpent: Date("1/1/2000"),
                amount: 0.0,
                expenseVendor: "",
                expenseDescription: "",
                isFillingIn: false,
                yagni: true
            }
        })

        printOutArray()
    }

    function deleteExpense(props) {
        console.log("deleteExpense(props) \n" + JSON.stringify(props))

        setAllExpensesArray(prevExpenseArray => {
            return prevExpenseArray.filter( item => 
                { return( item.id !== props ) }
            )
        }
        )

        printOutArray()
    }

    const expensesElementsToRender = allExpensesArray.map((expense) => {
        return (
            <div 
                key={expense.id}
                className="expense--row"
            >
                <p>On {expense.dateSpent}</p>
                <p>$ {expense.amount}</p>
                <p>Where: {expense.expenseVendor}</p>
                <p>Desc: {expense.expenseDescription}</p>
                <button
                    className="expense--delete--button"
                    onClick={() => deleteExpense(expense.id)}
                    key={expense.id}                 
                >Delete This Expense {expense.amount}</button>
                
            </div>
        )
    })

    function handleSubmit(event) {
        event.preventDefault()  // if this is commented out it clears all the form data and puts the data into an HTML URL in the browser
        console.log(`Submit of data is ${JSON.stringify(expensesState)}`)
    }

    // console.log("expensesState " + JSON.stringify(expensesState))
    
    return (
        <main>
            <form className="expenses--input--form" onSubmit={handleSubmit}>
                <text>3/02/22 Expenses Input Form 9:21 8:30 8:18 8:13 am</text>
                <label 
                    htmlFor="amount"
                    className="expenses--input--label"
                >Amount Paid</label>
                <input
                    id="amount"
                    className="expenses--input--elements"
                    type="text"
                    placeholder="Amount Paid"
                    onChange={handleChange}
                    name="amount"
                    value={expensesState.amount} // This "value={}" is how to impliment React controlled components
                />
                <label 
                    htmlFor="expenseVendor"
                    className="expenses--input--label"
                >Who did you pay?</label>
                <input
                    className="expenses--input--elements"
                    id="expenseVendor"
                    type="text"
                    placeholder="Type Who you paid"
                    onChange={handleChange}
                    name="expenseVendor"
                    value={expensesState.expenseVendor}  // React sometimes will complain that there are un-controlled components if this isn't done.
                />
                <button
                    className="add--expense--button"
                    onClick={addExpense}
                >
                    Add Your Expense $ ⇥ Started 3/02/2022
                </button>

            </form>
            <div className="expenses--list">
                {expensesElementsToRender}
            </div>

        </main>
    )
}