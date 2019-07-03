import React from 'react';

class BadgeForm extends React.Component{

     state={}

    // state.onChange = e =>{
      
    //     this.setState({
    //        [e.target.name] : e.target.value,
    //     })
    // }
    handleClick = e =>{
        console.log("Button was clicked");

    }
    // handleSubmit = e =>{
    //     e.preventDefault();
    //     console.log(this.state);

    // }
    render(){
        return (
            <React.Fragment>
                <h1>New Attendent</h1>
                {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                )}
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label >First Name:</label>
                        <input onChange={this.props.onChange} //lee la propiedad onChange pasada por parametro (props), en este caso se pasa
                                                              // la funcion que se ejecutara desde la clase padre
                               className="form-control" 
                               type="text" 
                               name="firstName" 
                               value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label >Last Name:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>  
                    <div className="form-group">
                        <label >Job Title:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label >Twitter:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                    </div>
                    <div className="form-group">
                        <label >Email:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValues.email}/>
                    </div>
                    {/* <div className="form-group">
                        <input onChange={this.props.onChange} className="form-control" type="text" name="avatarUrl" value={this.props.formValues.email}/>
                    </div> */}
                    <div className="form-group">
                        <label >Hashtag:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="hashtag" value={this.props.formValues.hashtag}/>
                    </div>
                   
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </React.Fragment>
            );
    }
}

export default BadgeForm;