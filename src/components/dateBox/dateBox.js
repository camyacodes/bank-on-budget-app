import { React, useState } from 'react'
import './dateBox.css'
import TransactionForm from '../transactionForm/transactionForm'

export default function DateBox() {

  const [isShown, setIsShown] = useState(false)

  const handleAddTransact = event => {
    setIsShown(current => !current)
  }

  return (
      <div>
          <div className='box'>
             
                  <button className='transac-btn' onClick={handleAddTransact}>
                      + Add Transaction
        </button>
        
        {isShown && (
          <TransactionForm />
        )}
              
          </div>
    </div>
  )
}

