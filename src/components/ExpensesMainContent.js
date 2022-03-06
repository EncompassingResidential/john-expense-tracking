import React from 'react';

// import Button from 'react-bootstrap/Button'
import { Button, Alert, Card, Form } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

/*
import expensesDataStorageTest from './expensesData.js'

let expensesStateDisk = JSON.parse(localStorage.getItem('expensesStateStorage')) || [];
let expensesArrayDisk = JSON.parse(localStorage.getItem('expensesArrayStorage')) || [];
let expensesDataStorage = []
*/

let initialExpensesState = {
    id: `${Date.now()}`,
    dateSpent: Date("1/1/2000"),
    amount: 0.0,
    expenseVendor: "",
    expenseDescription: "",
    yagni: true
}


export default function ExpensesMainContent() {

    const [expensesState, setExpensesState] = React.useState(JSON.parse(localStorage.getItem('expensesStateStorage')) || [])

    const [allExpensesArray, setAllExpensesArray] = React.useState(JSON.parse(localStorage.getItem('expensesArrayStorage')) || [])

    React.useEffect(() => {
            console.log("allExpenseArray changed");
            localStorage.setItem('expensesArrayStorage', JSON.stringify(allExpensesArray))
        }, [allExpensesArray]
    );

    React.useEffect(() => {
            console.log("allExpenseArray changed");
            localStorage.setItem('expensesStateStorage', JSON.stringify(expensesState))
        }, [expensesState]
    );

    function clearLocalStorage() {
        localStorage.clear();
    }

    function convert_to_float(b) {
        // Type conversion of string to float
        var floatValue = +(b);
        // Return float value
        return floatValue;
    }

    function handleChange(event) {
        const {name, value} = event.target

        setExpensesState(prevExpenseState => {
            return {
                ...prevExpenseState,
                [name]: value
            }
        })
        
    }
    
    function formatToStringMoneyAmount(amountFloat) {

       if (Number.isFinite(amountFloat) === true) {
            const fixedDecimals = amountFloat.toFixed(2)
            const formatedNumber = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(fixedDecimals)

            return(formatedNumber)
        } else {

            return("Error - $ amount is not number")
        }
    }

    function printOutArrays() {
        console.log("    function printOutArrays")
        console.log(Date.now() + " \n\nJSON.stringify(expensesState)")
        console.log(JSON.stringify(expensesState))
    
        console.log("\nJSON.stringify(allExpensesArray)")
        console.log(JSON.stringify(allExpensesArray))
        console.log()
    }
 
    function addExpense(event) {

        console.log("        --->>> addExpense Called from onclick")
        setAllExpensesArray(prevAllExpensesArray => {
            return [
            ...prevAllExpensesArray,
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
                // dateSpent: Date("1/1/2000"),
                amount: 0.0,
                expenseVendor: "",
                expenseDescription: "",
                yagni: true
            }
        })

    }

    function deleteExpense(props) {

        setAllExpensesArray(prevAllExpensesArray => {
            return prevAllExpensesArray.filter( item => 
                { return( item.id !== props ) }
            )
        })

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
                >Delete This Expense<br />{formatToStringMoneyAmount(expense.amount).slice(0,11)}</button>                
            </div>
        )
    })

    function handleSubmit(event) {

        console.log("        --->>> handleSubmit Called from form submission");

        event.preventDefault()  // if this is commented out it clears all the form data and puts the data into an HTML URL in the browser

    }
    
    // <Card.Img src="https://picsum.photos/300/10" />
    return (
        <main>
            <Form noValidate className="expenses--input--form" onSubmit={handleSubmit}>
                <Form.Group controlId="formDate">
                    <Form.Label>Date you paid</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Date you Paid"

                        onChange={handleChange}
                        value={expensesState.dateSpent} // This "value={}" is how to impliment React controlled components
                        name="dateSpent"

                    />
                </Form.Group>

                <Form.Group controlId="formAmount">
                    <Form.Label>Amount Paid</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Amount Paid"

                        onChange={handleChange}
                        name="amount"
                        value={expensesState.amount} // This "value={}" is how to impliment React controlled components
                    />
                </Form.Group>
                <Form.Group controlId="formVendor">
                    <Form.Label>Who did you pay?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Type Who you paid"

                        onChange={handleChange}
                        name="expenseVendor"
                        value={expensesState.expenseVendor}  // React sometimes will complain that there are un-controlled components if this isn't done.
                    />
                </Form.Group>
                <Form.Group controlId="formTextArea">
                    <Form.Label>Type a description of what you paid</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Type a description of what you paid"

                        onChange={handleChange}
                        name="expenseDescription"
                        value={expensesState.expenseDescription}  // React sometimes will complain that there are un-controlled components if this isn't done.
                    />
                </Form.Group>
                
                <Button
                    onClick={addExpense}
                >
                    Add Your Expense $ to the list ⇥
                </Button>

            </Form>
            <div className="expenses--list">
                {expensesElementsToRender}
            </div>

        </main>
    )
}