import React from 'react';

import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

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
            localStorage.setItem('expensesArrayStorage', JSON.stringify(allExpensesArray))
        }, [allExpensesArray]
    );

    React.useEffect(() => {
            localStorage.setItem('expensesStateStorage', JSON.stringify(expensesState))
        }, [expensesState]
    );

    function clearLocalStorage() {
        localStorage.clear();
    }

    function convert_to_float(b) {
        // Type conversion of string to float
        var floatValue = +(b);

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
            <Row key={expense.id} className="py-1" >
                <Col className="px-5" xs={8} >
                <Card body className="mx-1 my-1" border="success">
                    <Row className="text-success py-1" >
                        <Col>On {expense.dateSpent}</Col>
                        <Col>{formatToStringMoneyAmount(expense.amount)}</Col>
                    </Row >
                    <Row >
                        <Col 
                        className="text-success py-1">Where: {expense.expenseVendor}</Col>
                        <Col xl={4} 
                        className="text-primary py-1">Desc: {expense.expenseDescription}</Col>
                    </Row>
                    </Card>
                </Col>
                <Col className="pt-5" >
                    <Button
                        onClick={() => deleteExpense(expense.id)}
                        key={expense.id}
                        variant="outline-danger"
                        className=""
                        >Delete This Expense<br />{formatToStringMoneyAmount(expense.amount).slice(0,11)}
                    </Button>
                </Col>
            </Row>
        )
    })
    
    return (
        <Card body className="mx-1 my-1" border="success">
            <Form 
                noValidate 
                className="mx-2 p-2 border"
            >
                <Row>
                    <Col md>
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
                    </Col>
                    <Col md>
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
                    </Col>
                </Row>
                <Row>
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
                </Row>
                <Row>
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
                </Row>
                
                <Button
                    onClick={addExpense}
                    size="sm"
                    variant="primary"
                    className="mx-5 p-2 my-1"
                    spacing="15"
                >
                    Add Your Expense $ to the list ⇥
                </Button>

            </Form>
            <Table striped responsive="md" variant='dark' border={2} className="px-1">
                {expensesElementsToRender}
            </Table>

        </Card>
    )
}