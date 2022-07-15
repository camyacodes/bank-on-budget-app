import './transactionForm.css'
import {React, useState }from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

export default function TransactionForm() {

    const [company, setCompany] = useState(null)

    const handleOnChange = (companyData) => {
    setCompany(companyData)
}


  return (
      <div>transactionForm
          <AsyncPaginate
              placeholder="Company"
              debounceTimeout={600}
              value="company"
              onChange={handleOnChange}
          />
    </div>
  )
}
