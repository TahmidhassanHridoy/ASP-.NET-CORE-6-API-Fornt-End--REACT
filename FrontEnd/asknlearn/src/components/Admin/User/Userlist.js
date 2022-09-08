import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ModeratorList = () => {
    var x = 0;
    useEffect(() => {
        document.title = "Users List From API"
    }, [])
    const [students, setMessages] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7298/api/users")
            .then(resp => {
                console.log(resp.data);
                setMessages(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div class="container">
            <div class="section-title">
                        <h2>Users List</h2>
                    </div>
            <table class="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                   
                        students.map(st => (
                            <tr class="table-light">
                                <th scope="row">{st.id}</th>
                                <td>{st.name}</td>
                                <td>{st.username}</td>
                                <td>{st.password}</td>
                                <td>{st.email}</td>
                                <td><Link to={"/edit/user/"+st.id} class="btn btn-primary" style={{marginRight:"5px"}}> Edit</Link> 
                                    
                                    <Link to={"/delete/user/"+st.id} class="btn btn-danger"> Delete</Link> {" "} 
                               </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ModeratorList;