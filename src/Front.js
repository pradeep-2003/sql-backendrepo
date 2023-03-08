import { useState } from 'react';
import './Front.css'
import { Link } from 'react-router-dom';
function  Front() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Username is Required";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Corrct Email-Id is Required";
        
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Password must contain Special Characters, a-z, A-Z, Numbers";
        return errors;
    }

    return ( 
        <body>
            <div class="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6jpzV5hwOypqDPviHyQaqGk8YJbYLKP8Dg&usqp=CAU" width="750px" height="700px" alt="jyo"/>
        </div>



        
        <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className='tit'>

            <h1>Login</h1>
            </div>
            <div className='row'>
                <label>Username : </label><br></br>
                <input type="text" id='username' placeholder='  Enter your Username...' value={formValues.username}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>

            <div className='row'>
                <label>E-mail : </label><br></br>
                <input type="email" id='email' placeholder='  Enter your Email-id...' value={formValues.email}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'>
                <label>Password : </label><br></br>
                <input type="password" id='password' placeholder='  Enter the Password...' value={formValues.password}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="psw">Forgot <a href="#">password?</a></span>

            <div className='row'>
               <Link to="/Main"> <button className='btn btn-primary'>Login</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/Main"><button className='btn btn-primary'>Sign Up</button></Link>
            </div>
        </form>
        </div>
        </body>
     );
}

export default Front