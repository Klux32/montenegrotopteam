"use client"
import React, {useState} from 'react'
import Button from './button'
import FormControl from './formControl'

const Form = ({children, style, data, details}) => {

    const [formData, setFormData] = useState({});

    const onSubmit = (e) =>{
        e.preventDefault;
        console.log("forma je submitovana")
        console.log(formData)
    }

  return (
    <form action={onSubmit} className={`${style} row`}>
        {
            details.map((index, key)=>(
                <FormControl setData={setFormData} data={formData} key={key} style={index.style} type={index.type} name={index.name} label={index.label} value={index.value} options={index.options != null ? index.options : null} rows={index.rows}/>
            ))
        }
        <div className='col-12 d-grid'>
          <Button  type="submit" style="btn btn-outline-light mt-5" text="Pošalji"/>
        </div>
    </form>
  )
}

export default Form