import React, { Component } from 'react';

class Tax1 extends Component {
    state = {
        name: "",
        taz: "",
        taz_err: "",
        phone: "",
        address: "",
        numOfCars: "",
        email: "",    
        inputOfMonth: "",
        tax: 0        
    }    
    render() {        
        let imgTax = (<img src="https://media.istockphoto.com/vectors/yellow-sticker-with-black-postit-dont-worry-be-happy-note-hand-stock-vector-id958652344?k=20&m=958652344&s=612x612&w=0&h=05IGL5iP-1vf3MmjTIQoiEG_Otz0bOHgrTBLdylHrU4=" alt="Don't worry! Be happy!!!" height="200" />);
        let imgLetter = (<img src="https://c.tenor.com/aGrI0bYqqokAAAAi/have-a-nice-day-sun.gif" alt="Have a nice day" height="100"/>)
        let letter = (<div id='myLetter'>
        <p><h5>Hello, mr/mrs {this.state.name}, phone number: {this.state.phone}.
          </h5></p>
        <p><h5>Report your income is {this.state.inputOfMonth} ₪.</h5></p>
        <p><h5>You must pay tax in the amount of {this.state.tax} ₪.</h5></p>
        <p><h5>{imgLetter}</h5></p>
        {/* <img src="https://c.tenor.com/aGrI0bYqqokAAAAi/have-a-nice-day-sun.gif" alt="Have a nice day"/> */}
      </div>);
        return (
            <div>           
            <div className='contain'>
                <label>Your name:{" "}</label>
                <input defaultValue = {this.state.name} type = "text"             onChange={(e) => {
                        this.setState({name : e.target.value})}
                    }>
                </input>
                <label>Your taz: {this.state.taz_err}</label>                
                <input
                    type = "number"                    
                    defaultValue = {this.state.taz} 
                    onChange = {(e) => {                        
                        if(e.target.value.length > "9")
                        {
                            this.setState({taz_err: "*"});
                            e.target.value = ""; 
                            alert("Wrong TAZ");                                                     
                        }
                        else {
                            this.setState({taz_err: ""});
                            this.setState({taz: e.target.value})
                        }                        
                }}
                    // className = {this.state.taz_err === "" ? 'input' : 'input_error'} 
                >                                    
                </input>
                <label>Your phone: {" "}</label>
                <input 
                    type="phone"
                    defaultValue={this.state.phone}
                    onChange={(e) => {
                        this.setState({phone: e.target.value})
                }}>
                </input>
                <label>Your email:</label>
                <input
                    type="email"
                    defaultValue={this.state.email}
                    onChange={(e) => {
                        this.setState({email: e.target.value})
                    }}>                   
                </input>
                <label>Your address:</label>
                <input
                    type="text" 
                    defaultValue={this.state.address} 
                    onChange={(e) => {
                        this.setState({address: e.target.value})
                }}>
                </input>
                <label>How many cars do you have:</label>
                <input
                    type="number" 
                    defaultValue={this.state.numOfCars} 
                    onChange={(e) => {
                        this.setState({numOfCars: e.target.value})
                }}>
                </input>
                <label>Your monthly income:</label>
                <input 
                    type="number"
                    defaultValue={this.state.inputOfMonth}
                    onInput={(e) => {
                        this.setState({inputOfMonth: e.target.value});
                        this.state.numOfCars >= 2 
                            ? this.setState({tax: (e.target.value * 0.3).toFixed(2)})
                            : this.setState({tax: (e.target.value * 0.1).toFixed(2)})
                        ;
                                                   
                    }}>                        
                </input> 
            </div>                 
            {this.state.inputOfMonth !== "0" ? letter : imgTax}      
        </div> 
        );
    }
}

export default Tax1;
