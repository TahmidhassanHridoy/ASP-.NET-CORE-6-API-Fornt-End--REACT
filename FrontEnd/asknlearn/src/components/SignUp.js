import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom"
import axios from 'axios';
const SignUp = () => {
    useEffect(() => {
        document.title = "Signup!"
      }, [])
    const [errorList,setError]= useState([]); 
    let[name, setName] = useState("");
    let[eduInfo, setEduInfo] = useState("");
    let[age, setAge] =useState("");

    let history = useHistory();
    const [students, setMessages] = useState([]);
    const signupSubmit= ()=>{
        var obj = {name: name,age:age,education:eduInfo};
        console.log(obj);
        axios.post('/user', obj)
        .then(resp=>{
             console.log(resp.data);
             history.push("/users/list");
        })
        .catch(err=>{
            console.log(err);
            console.log(err.response.data.errors);
            setError(err.response.data.errors)
        }); 
    }


    return (
        <div>
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2>Adding User</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-7">
                                <form role="form" class="php-email-form">
                          
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required 
                                            value={name} onChange={(e)=>setName(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.name}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="text" class="form-control" name="age" id="age" placeholder="Your Age" required 
                                            value={age} onChange={(e)=>setAge(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.age}</span>
                                        </div>
                                    </div>
 
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="eduInfo" id="eduInfo" placeholder="Educational Information" required  
                                            value={eduInfo} onChange={(e)=>setEduInfo(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.eduInfo}</span>
                                    </div>



             
                                </form>
                                <div class="php-email-form"><button type="submit" onClick={signupSubmit}>Add User</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default SignUp;