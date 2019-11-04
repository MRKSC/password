import React from 'react';
import styled from 'styled-components'
import "./GenerateCode.css"

const GenerateCodeContainer = styled.div `
padding-top: 50px;
margin: 20px;
`;

const ToggleButtonContainer = styled.div `
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
margin: 20px;
`;

const InputContainer = styled.div `

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

`;

const ButtonContainer = styled.div `
padding-top: 25px;
display: flex;
align-items: center;
flex-direction: column;
margin: 20px;
`;

const ToggleButton = styled.button `
        /*margin: 5px;
        width:100px;
        padding: 10px 28px 10px 28px;
        background-color: #0b0c11;
        color: #f5f5f5;
        border: none;
        border-radius: 5px;
        display:inline-block;
        cursor:pointer;
        font-size:17px;
        font-weight: 600;
        text-decoration:none;
        */
        width:100px;
        padding: 10px 28px 10px 28px;
        background-color: #0b0c11;
        color: #f5f5f5;
        border: none;
        border-radius: 5px;
        display:inline-block;
        cursor:pointer;
        font-size:17px;
        font-weight: 600;
        text-decoration:none;
        ${(props) => { // yellow collor
        if (props.toggle) {
            return `
            background-color: #F5DF28;
            `;
        }
        else { // red collor
            return `
            background-color: #FF1517; 
            `
        }
    }}
    `;

const ResultBoxContainer = styled.div `
display: flex;
align-items: center;
flex-direction: column;
min-width: 700px;
background: #e6e6e6;
padding: 20px;
margin: 20px;
`;

const GeneratedPassword = styled.h1 `
color: black;
`;

const InputRange = styled.input `
min-width: 450px;
`;

export class GenerateCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggleStateOne: false, toggleStateTwo : false, toggleStateThree : false, toggleStateFour : false, value : 21};
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.handleClickThree = this.handleClickThree.bind(this);
        this.handleClickFour = this.handleClickFour.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleClickOne() {
    	this.setState(prevState => ({
    		toggleStateOne: !prevState.toggleStateOne
    	}));
    }

    handleClickTwo() {
        this.setState(prevState => ({
            toggleStateTwo: !prevState.toggleStateTwo
        }));
    }

    handleClickThree() {
        this.setState(prevState => ({
            toggleStateThree: !prevState.toggleStateThree
        }));
    }

    handleClickFour() {
        this.setState(prevState => ({
            toggleStateFour: !prevState.toggleStateFour
        }));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

// function for randomize password output

    generateSmallLettersPassword () { // small letters password
        let password = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }
    generateBigLettersPassword () { // big letters password
        let password = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
          return password.toLocaleUpperCase();
    }

    generateNumbersPassword () { // numeric password
        let password = '';
        let characters = '0123456789';
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
                password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }

    generateSymbolsPassword () { // symbolic password
        let password = '';
        let characters = "!£$%^&*()_<>/?{}[]";
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }

// combination of generated passwords

    generateLettersAndNumbersPassword () { // letters and numbers password
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateNumbersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateLettersAndSymbolsPassword () { // letters and symbols password
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateSymbolsPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateNumbersAndSymbolsPassword () { // numbers and symbols password
        let password = '';
        let characters =  this.generateNumbersPassword() + this.generateSymbolsPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateBigLettersAndNumbersAndSymbolsPassword () { // letters and symbols password
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateNumbersPassword() + this.generateSymbolsPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateBigLettersAndNumbersAndSymbolsAndSmallLettersPassword () { // letters and symbols password
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateNumbersPassword() + this.generateSymbolsPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateBigLettersAndSmallLettersPassword () { // letters and symbols password
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateNumbersAndSmallLettersPassword () { // letters and symbols password
        let password = '';
        let characters =  this.generateNumbersPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateSymbolsAndSmallLettersPassword () { // letters and symbols password
        let password = '';
        let characters =  this.generateSymbolsPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateSymbolsAndNumbersAndSmallLettersPassword () { // symbols and numbers and  small letters
        let password = '';
        let characters =  this.generateSymbolsPassword() + this.generateNumbersPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateBigLettersAndNumbersAndSmallLettersPassword () { // BIG LETTERS and numbers and  small letters
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateNumbersPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }

    generateBigLettersAndSymbolsAndSmallLettersPassword () { // BIG LETTERS and symbols and  small letters
        let password = '';
        let characters =  this.generateBigLettersPassword() + this.generateSymbolsPassword() + this.generateSmallLettersPassword();
        let charactersLength = characters.length;
        let length = this.state.value;
        for ( let i = 0; i < length; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;

    }
// sort logic for displayed password

    sortState() {
        const sort = [];
        sort.push(this.state.toggleStateOne);
        sort.push(this.state.toggleStateTwo);
        sort.push(this.state.toggleStateThree);
        sort.push(this.state.toggleStateFour);
         if (sort[0] === true && sort[1] === false && sort[2] === false && sort[3] === false) {
             return this.generateBigLettersPassword() //  BIG LETTERS
         }
        if (sort[0] === false && sort[1] === true && sort[2] === false && sort[3] === false) {
            return this.generateNumbersPassword() // numbers
        }
        if (sort[0] === false && sort[1] === false && sort[2] === true && sort[3] === false) {
            return this.generateSymbolsPassword() // symbols
        }
        if (sort[0] === false && sort[1] === false && sort[2] === false && sort[3] === true) {
            return this.generateSmallLettersPassword() // small letters
        }
        if  (sort[0] === true && sort[1] === true && sort[2] === false && sort[3] === false ) {
            return this.generateLettersAndNumbersPassword() // BIG LETTERS and numbers
        }
        if  (sort[0] === true && sort[1] === false && sort[2] === true && sort[3] === false ) {
            return this.generateLettersAndSymbolsPassword() // BIG LETTERS and symbols
        }
        if  (sort[0] === false && sort[1] === true && sort[2] === true && sort[3] === false ) {
            return this.generateNumbersAndSymbolsPassword()  // numbers and symbols
        }
        if  (sort[0] === true && sort[1] === true && sort[2] === true && sort[3] === false ) {
            return this.generateBigLettersAndNumbersAndSymbolsPassword() // BIG LETTERS and numbers and symbols
        }
        if  (sort[0] === true && sort[1] === true && sort[2] === true && sort[3] === true ) {
            return this.generateBigLettersAndNumbersAndSymbolsAndSmallLettersPassword() // BIG LETTERS and numbers and symbols and small letters
        }
        if  (sort[0] === true && sort[1] === false && sort[2] === false && sort[3] === true ) {
            return this.generateBigLettersAndSmallLettersPassword() // BIG LETTERS and small letters
        }
        if  (sort[0] === false && sort[1] === true && sort[2] === false && sort[3] === true ) {
            return this.generateNumbersAndSmallLettersPassword() // numbers and small letters
        }
        if  (sort[0] === false && sort[1] === false && sort[2] === true && sort[3] === true ) {
            return this.generateSymbolsAndSmallLettersPassword() // symbols and small letters
        }
        if  (sort[0] === false && sort[1] === true && sort[2] === true && sort[3] === true ) {
            return this.generateSymbolsAndNumbersAndSmallLettersPassword() // symbols and numbers and  small letters
        }
        if  (sort[0] === true && sort[1] === true && sort[2] === false && sort[3] === true ) {
            return this.generateBigLettersAndNumbersAndSmallLettersPassword() // BIG LETTERS and numbers and  small letters
        }
        if  (sort[0] === true && sort[1] === false && sort[2] === true && sort[3] === true ) {
            return this.generateBigLettersAndSymbolsAndSmallLettersPassword() // BIG LETTERS and symbols and  small letters
        }
        else return "Generate Password" // small letters
    }

    render() {
        return (
            <GenerateCodeContainer>
                <InputContainer>
                    <div className="">
                        <h1 className="heroku"> Generate your own password</h1>
                    </div>
                    <div>
                    <InputRange type="range" name="Length"  min="6" max="36" defaultValue={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div>
                        <p>{this.state.value}</p>
                    </div>
                </InputContainer>
                <ToggleButtonContainer>
                    <div className="div-centering">
                        <h3>Use Big Letters?</h3>
                        <ToggleButton onClick={this.handleClickOne}>{this.state.toggleStateOne ? 'ON' : 'OFF'}</ToggleButton>
                    </div>
                    <div className="div-centering">
                        <h3> Use Numbers?</h3>
                        <ToggleButton onClick={this.handleClickTwo}>{this.state.toggleStateTwo ? 'ON' : 'OFF'}</ToggleButton>
                    </div>
                    <div className="div-centering">
                        <h3> Use Symbols? </h3>
                        <ToggleButton onClick={this.handleClickThree}>{this.state.toggleStateThree ? 'ON' : 'OFF'}</ToggleButton>
                    </div>
                    <div className="div-centering">
                        <h3> Use Small Letters? </h3>
                        <ToggleButton onClick={this.handleClickFour}>{this.state.toggleStateFour ? 'ON' : 'OFF'}</ToggleButton>
                    </div>
                </ToggleButtonContainer>
                <ButtonContainer>
                </ButtonContainer>
                <ResultBoxContainer>
                    <GeneratedPassword>{this.sortState()}</GeneratedPassword>
                </ResultBoxContainer>
            </GenerateCodeContainer>
        );
    }

}
