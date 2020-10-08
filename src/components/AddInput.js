import React from "react";
import AddInputInTable from "./AddInputInTable";

class AddInput extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        occupation: "",
        city: "",
        tableLists: [],
        currentSelectedData: null
    }
    id = 0
    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }
    handleLastName = (event) => {
        this.setState({ lastName: event.target.value })

    }
    handleOccupation = (event) => {
        this.setState({ occupation: event.target.value })
    }
    handleCity = (event) => {
        this.setState({ city: event.target.value })
    }
    addInTable = () => {
        this.setState({
            tableLists: [...this.state.tableLists, {
                id: this.id + 1,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                occupation: this.state.occupation,
                city: this.state.city
            }]
        });
        this.id = this.id + 1;

    }
    backData = () => {
        console.log("back");       
        this.setState({
            currentSelectedData: null
        });
    }

    viewData = (id) => {

        this.setState({
            currentSelectedData: this.state.tableLists.find(tableList => tableList.id === id)
        });

    }
    deleteData = (id) => {
        this.setState({
            tableLists: this.state.tableLists.filter(tableList => tableList.id !== id)
        });

    }
    componentDidMount(){
        console.log("Component did mount");
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render() {
        return (

            <div>
                {!this.state.currentSelectedData && <div>
                    <h3>Adding Text Field</h3>
                    <label>
                        FirstName:
                        <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />
                    </label>
                    <label>
                        LastName:
                        <input type="text" value={this.state.lastName} onChange={this.handleLastName} />
                    </label>
                    <label>
                        Occupation:
                        <input type="text" value={this.state.occupation} onChange={this.handleOccupation} />
                    </label>
                    <label>
                        City:
                        <input type="text" value={this.state.city} onChange={this.handleCity} />
                    </label>
                    <button onClick={this.addInTable}>Add In Table</button>
                    <div>
                        <table border="1px solid black">
                            <tbody>
                                {this.state.tableLists.map((tableList) => (
                                    <AddInputInTable
                                        tableList={tableList}
                                        key={tableList.id}
                                        viewData={this.viewData}
                                        deleteData= {this.deleteData} 
                                    />

                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
                }

                {this.state.currentSelectedData && <div>
                    <table border="1px solid black">
                        <tbody>
                            <tr>
                                <td>{this.state.currentSelectedData.firstName}</td>
                                <td>{this.state.currentSelectedData.lastName}</td>
                                <td>{this.state.currentSelectedData.occupation}</td>
                                <td>{this.state.currentSelectedData.city}</td>

                            </tr>
                        </tbody>
                    </table>

                    <button onClick={this.backData}>Back</button>
                </div>

                }

            </div>

        )
    }
}

export default AddInput;