import react, { useEffect, useReducer } from 'react';

import { Modal, ModalTitle, ModalBody, ModalFooter, Table } from 'react-bootstrap'

const defaultExpense = {
  filter: "month",
  list: []
}

/*
  filter: (month) | range | all
*/

const expenseReducer = (state, action)=>{
  switch(action.filter){
    case "month": {
      // pull expenses by month
      break;
    }
    case "range": {
      // pull expenses by date range
      break;
    }
    case "all": {
      // pull all expenses
      break;
    }
    default: {
      console.log("Wrong filter provided");
    }
  }
}

const ExpenseTypeModal = (props) => {

  const { expenseType, modal, toggleModal, resetModal } = props;
  const [ expenses, dispatchExpenses ] = useReducer(expenseReducer, defaultExpense);

  useEffect(()=>{
    if(modal){
      dispatchExpenses({
        type: "month",
      })
    }
  }, [modal])

  return(
    <Modal
      size="lg"
      isOpen={modal}
      toggle={toggleModal}
      onClosed={resetModal}
    >
      <ModalHeader toggle={toggleModal}>{expenseType.name} Expenses</ModalHeader>
      <ModalBody>
        <Table responsive="sm">
          <tr>
            <th>Cost</th>
            <th>Date</th>
          </tr>
          {expenses && expenses.list && expenses.list.size > 0
            ? expenses.list.map((exp)=>{
              return(
                <tr onClick={alert(`clicked: ${expenseType.name} - ${exp.cost}`)}>
                  <td>
                    {exp.cost}
                  </td>
                  <td>
                    {exp.date}
                  </td>
                </tr>
              )
            })
            : <p> - </p>
          }
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggleModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ExpenseTypeModal;