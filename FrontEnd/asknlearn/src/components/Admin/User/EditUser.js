import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditUser = () => {
    // let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[username, setusername] =useState("");
    let[email, setemail] =useState("");
    // let[id,setId]=useState("");
    let history = useHistory();
    const {id}=useParams();
    const [posts,setPosts]=useState([]);
    var uid = "";
    if(localStorage.getItem('user')){
      var obj = JSON.parse(localStorage.getItem('user'));
      uid=obj.id;
    }
    useState(()=>{
    //   var id = "";
    // if(localStorage.getItem('user')){
    //   var obj = JSON.parse(localStorage.getItem('user'));
    //   id=obj.id;
    // }
       
      axios.get("https://localhost:7298/api/users/"+id).then(resp=>{
        const Data=resp.data;
          setPosts(Data)
          console.log(Data);
      }).catch(err=>{
          console.log(err);
      });
  },[])




    const Update= ()=>{
        
        if(name=="")
        {
            name=posts.name;
        }
        if(username=="")
        {
            username=posts.username;
        }
        if(email==""){
          email=posts.email;
        }


        var obj = {name:name,username : username,email:email};
        //console.log(posts.Freelance_Id);
          console.log(obj);

        if(axios.put("/users/"+id,obj)
        .then(resp=>{
            var token = resp.data;
                history.push("/users/list");

        }).catch(err=>{
            console.log(err);
        }))
        {
          alert("Update Success");
          
          // history.push("/dashboard");
        }
        
    }


    return (
        <div >
            <section id="contact" class="contact">
                <div className="container">
                    <br />
                    <div className="section-title">
                        <h2 align="center" style={{color:"#990000"}}>Users Profile</h2>
                    </div>

                    <div className="row">
                        <center>
                            <div className="col-lg-5">
                                <form className="php-email-form">
                                {/* <div class="form-group mt-3">
                                        <input type="test" class="form-control" name="id" id="id" placeholder="ID"
                                        
                                         required  defaultValue={posts.id} onChange={(e)=>setId(e.target.value)}/>
                                    </div> */}

                                    <div class="form-group mt-3">
                                        <input type="test" class="form-control" name="name" id="nane" placeholder="Enter Your Name" 
                                        
                                         required  defaultValue={posts.name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="age" id="age" placeholder="Ente username" 
                                       
                                         required  defaultValue={posts.username} onChange={(e)=>setusername(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="age" id="age" placeholder="Enter email" 
                                       
                                         required  defaultValue={posts.email} onChange={(e)=>setemail(e.target.value)}/>
                                    </div>
                                  
                                </form>
                                <div class="php-email-form"><button type="submit" class="btn btn-primary"onClick={Update}>Update</button></div>
                               
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default EditUser;