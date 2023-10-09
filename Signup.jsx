import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import {Link} from 'react-router-dom'
import './App.css'
import './Signup.css'


const Signup = (props)=>{
        const [contact, setContact] = useState({
            displayname: '',
            email: '',
            password: '',
            confirmpassword:''
        })
       
    const{displayName, email, password,confirmpassword} = contact;

    console.log(contact);

    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }


 
    return <div className= 'header-div'>


<Input 
       name= 'displayname'
       type= 'text'
       placeholder ='name'
       onChange = {handleChange}
       value = {contact.displayname}
       />
      <br></br>

       <Input 
       name= 'email'
       type= 'email'
       placeholder ='usemailername'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>
       <Input 
       name='confirmpassword'
       type= 'password'
       placeholder ='confirmpassword'
       onChange = {handleChange}
       value = {contact.confirmpassword}
       />

       <br></br>

       <Button 
           type = 'submit'
           text='Signup'
       />

       <br></br>
       <br></br>

       <Link to='/login'>
        Login

       </Link>


    </div>

}
export default Signup;
