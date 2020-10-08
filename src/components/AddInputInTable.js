import React from "react";


class AddInputInTable extends React.Component {
    componentDidMount(){
        console.log("AddInputInTable Component did mount", this.props.tableList.id);
    }
    componentWillUnmount(){
        console.log("AddInputInTable Component will unmount");
    }
    

    render() {
        return (
                    <tr>
                        
                        <td>{this.props.tableList.firstName} </td>
                        <td>{this.props.tableList.lastName} </td>
                        <td>{this.props.tableList.occupation} </td>
                        <td> {this.props.tableList.city}</td>
                        <td><button onClick={() => this.props.viewData(this.props.tableList.id)}>View Data</button> 
                           <button onClick={() => this.props.deleteData(this.props.tableList.id)}>Delete Data</button>
                         </td>  
                    </tr>
                    

           
        )
    }


}

export default AddInputInTable;