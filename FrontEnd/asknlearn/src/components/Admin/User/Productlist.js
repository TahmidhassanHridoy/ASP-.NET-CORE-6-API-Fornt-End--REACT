import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    var x = 0;
    useEffect(() => {
        document.title = "Product List From API"
    }, [])
    const [students, setMessages] = useState([]);

    useEffect(() => {
        axios.get("https://www.pqstec.com/InvoiceApps/values/GetProductListAll")
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
                        <h2>Product List</h2>
                    </div>
            <table class="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                        <th scope="col">CategoryName</th>
                        <th scope="col">UnitName</th>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">ProductBarcode</th>
                        <th scope="col">Description</th>
                        <th scope="col">BrandName</th>
                        <th scope="col">SizeName</th>
                        <th scope="col">ColorName</th>
                        <th scope="col">ModelName</th>
                        <th scope="col">VariantName</th>
                        <th scope="col">OldPrice</th>
                        <th scope="col">Price</th>
                        <th scope="col">CostPrice</th>
                        <th scope="col">WarehouseList</th>
                        <th scope="col">stock</th>
                        <th scope="col">TotalPurchase</th>
                        <th scope="col">LastPurchaseDate</th>
                        <th scope="col">LastPurchaseSupplier</th>
                        <th scope="col">TotalSales</th>
                        <th scope="col">LastSalesDate</th>
                        <th scope="col">LastSalesCustomer</th>
                        <th scope="col">ImagePath</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                   
                        students.map(st => (
                            <tr class="table-light">
                                <th scope="row">{st.Id}</th>
                                <td>{st.CategoryName}</td>
                                <td>{st.UnitName}</td>
                                <td>{st.Name}</td>
                                <td>{st.Code}</td>
                                <td>{st.ProductBarcode}</td>
                                <td>{st.Description}</td>
                                <td>{st.BrandName}</td>
                                <td>{st.SizeName}</td>
                                <td>{st.ColorName}</td>
                                <td>{st.ModelName}</td>
                                <td>{st.VariantName}</td>
                                <td>{st.OldPrice}</td>
                                <td>{st.Price}</td>
                                <td>{st.CostPrice}</td>
                                <td>{st.WarehouseList}</td>
                                <td>{st.stock}</td>
                                <td>{st.TotalPurchase}</td>
                                <td>{st.LastPurchaseDate}</td>
                                <td>{st.LastPurchaseSupplier}</td>
                                <td>{st.TotalSales}</td>
                                <td>{st.LastSalesDate}</td>
                                <td>{st.LastSalesCustomer}</td>
                                <td>{st.ImagePath}</td>
                                <td>{st.Type}</td>
                                <td>{st.Status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;