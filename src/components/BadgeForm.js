import React from 'react';

class BadgeForm extends React.Component{

    state={}
    handleChange = e =>{
      
        this.setState({
           [e.target.name] : e.target.value,
        })
    }
    handleClick = e =>{
        console.log("Button was clicked");
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);

    }
    render(){
        return (
            <div>
                <h1>New Attendent</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First Name:</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName}/>
                    </div>
                    <div className="form-group">
                        <label >Last Name:</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label >Job Title:</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label >Twitter:</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter}/>
                    </div>
                    <div className="form-group">
                        <label >Hashtag:</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="hashtag" value={this.state.hashtag}/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
            );
    }
}

export default BadgeForm;