import React,{Fragment,useRef} from 'react';
import { Form } from '@unform/web';
import Input from './components/Form/input'
import * as Yup from 'yup'
import './app.css';


const app = {
  background:'black',
  color:'white',
  with:'100%',
  maxWidth:'300px',
  margin:'auto',
  padding:'40px'
}
const App = () => {
  const formRef = useRef(null)
  async function handleSubmit(data,{reset}){
    try {
      console.log(data)
      const schema = Yup.object().shape({
        name: Yup.string().required('please, is required write the field  below,  ')
      })

     await schema.validate(data,{
        abortEarly:false,
      })
      formRef.current.setErrors({});
      reset()

    } catch (error) {
      if(error instanceof Yup.ValidationError){
        const errorMessages = {}

        error.inner.forEach(error =>{
        errorMessages[error.path] = error.message
        formRef.current.setErrors(errorMessages);
        })
        
      }
    }
  }

  return(
    <Fragment>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Hellow World</h1>
        <Input name='name' type='text' placeholder='Write your Name Here'/>
        <button>Enviar</button>
      </Form>
    </Fragment>
  )
}
export default App;
 

 
