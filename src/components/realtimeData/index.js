import StartFirebase from "../firebaseConfig/index";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { Table } from "react-bootstrap";
import './index.css'

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }
    
    componentDidMount(){
        const dbRef = ref(db, 'Customer/');

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(
            <Table className="container w-75" bordered striped variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Korisničko ime</th>
                        <th>Ime i prezime</th>
                        <th>Broj telefona</th>
                        <th>Datum rođenja</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{row.key}</td>
                                <td>{row.data.Fullname}</td>
                                <td>{row.data.Phonenumber}</td>
                                <td>{row.data.dateofbirth}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}