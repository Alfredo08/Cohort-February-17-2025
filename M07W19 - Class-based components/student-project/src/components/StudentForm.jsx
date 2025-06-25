import React from 'react';

class StudentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: -1
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewStudent(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            age: -1
        }, () => {
            // useEffect(() => {}, [firstName, lastName, age]) 
            console.log("Updated the list of students successfully");
        });
        console.log("Will this print at the end?");
    }

    render = () => {
        return(
            <>
                <h2> Add new student </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>
                            First name:
                        </label>
                        <input type="text"
                               id="firstName"
                               value={this.state.firstName}
                               onChange={(event) => this.setState({firstName: event.target.value})}
                               />
                    </div>
                    <div>
                        <label htmlFor='lastName'>
                            Last name:
                        </label>
                        <input type="text"
                               id="lastName"
                               value={this.state.lastName}
                               onChange={(event) => this.setState({lastName: event.target.value})}
                               />
                    </div>
                    <div>
                        <label htmlFor='age'>
                            Age:
                        </label>
                        <input type="number"
                               id="age"
                               value={this.state.age}
                               onChange={(event) => this.setState({age: Number(event.target.value)})}
                               />
                    </div>
                    <button>
                        Add
                    </button>
                </form>
            </>
        );
    }
}

export default StudentForm;