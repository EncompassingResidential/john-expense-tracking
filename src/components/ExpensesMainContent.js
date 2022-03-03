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

    function convert_to_float(b) {
        // Type conversion of string to float
        var floatValue = +(b);
        // Return float value
        return floatValue;
    }

    function handleChange(event) {
        const {name, value} = event.target

        console.log(`name ${name} === "amount"`)

        setExpensesState(prevExpenseState => {
            return {
                ...prevExpenseState,
                [name]: value,
                isFillingIn: true
            }
        })
        
    }
    
    console.log(Date.now() + " \n\nJSON.stringify(expensesState)")
    console.log(JSON.stringify(expensesState))

    function formatToStringMoneyAmount(amountFloat) {
        /*
        console.log(`\nformatToStringMoneyAmount`)
        console.log(`typeof amountFloat is ${typeof amountFloat}\n`)
        console.log(`amountFloat is ${amountFloat}\n`)
        console.log(`Number.isFinite(amountFloat) is ${Number.isFinite(amountFloat)}\n`)
        */

       // const amountFloatNumber = toFloat(amountFloat)

       if (Number.isFinite(amountFloat) === true) {
            const fixedDecimals = amountFloat.toFixed(2)
            const formatedNumber = fixedDecimals.toLocaleString("en-US")
            // console.log(`returning "$ " + ${formatedNumber}`)
            return("$ " + formatedNumber)
        } else {
            // console.log(`returning only "$ "`)
            return("$ ")
        }
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
            amount: convert_to_float(expensesState.amount),
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

    }

    function deleteExpense(props) {
        console.log("deleteExpense(props) \n" + JSON.stringify(props))

        setAllExpensesArray(prevExpenseArray => {
            return prevExpenseArray.filter( item => 
                { return( item.id !== props ) }
            )
        }
        )

    }

    const expensesElementsToRender = allExpensesArray.map((expense) => {
        return (
            <div 
                key={expense.id}
                className="expense--row"
            >
                <div
                    className="expense--row--data"
                >
                    <p
                        className="expense--row--dataitems"
                    >On {expense.dateSpent}</p>
                    <p
                        className="expense--row--dataitems"
                    >{formatToStringMoneyAmount(expense.amount)}</p>
                    <p
                        className="expense--row--dataitems"
                    >Where: {expense.expenseVendor}</p>
                    <p
                        className="expense--row--dataitems"
                    >Desc: {expense.expenseDescription}</p>
                </div>
                <button
                    className="expense--delete--button"
                    onClick={() => deleteExpense(expense.id)}
                    key={expense.id}                 
                >Delete This Expense<br />{formatToStringMoneyAmount(expense.amount)}</button>                
            </div>
        )
    })

    function handleSubmit(event) {
        event.preventDefault()  // if this is commented out it clears all the form data and puts the data into an HTML URL in the browser

        printOutArray()
    }

    // console.log("expensesState " + JSON.stringify(expensesState))
    
    return (
        <main>
            <form className="expenses--input--form" onSubmit={handleSubmit}>
                <p 
                    className="expenses--input--label"
                >3/02/22 Expenses Input Form 1:02 pm 9:21 8:30 8:18 8:13 am</p>
                
                <label 
                    htmlFor="dateSpent"
                    className="expenses--input--label"
                >Date you paid</label>
                <input
                    id="dateSpent"
                    className="expenses--input--elements expenses--input--datespent"
                    type="date"
                    placeholder="Date you Paid"
                    onChange={handleChange}
                    name="dateSpent"
                    value={expensesState.dateSpent} // This "value={}" is how to impliment React controlled components
                />

                <label 
                    htmlFor="amount"
                    className="expenses--input--label"
                >Amount Paid</label>
                <input
                    id="amount"
                    className="expenses--input--elements expenses--input--amount"
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
                <label 
                    htmlFor="expenseDescription"
                    className="expenses--input--label"
                >Type a description of what you paid</label>
                <textarea
                    className="expenses--input--elements"
                    id="expenseDescription"
                    type="textArea"
                    placeholder="Type a description of what you paid"
                    onChange={handleChange}
                    name="expenseDescription"
                    value={expensesState.expenseDescription}  // React sometimes will complain that there are un-controlled components if this isn't done.
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