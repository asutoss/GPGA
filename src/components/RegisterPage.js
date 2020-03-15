import React from 'react';
import DD from './dd';
import database from '../firebase/firebase';
import '../style/RegisterPage.scss';

class RegisterPage extends React.Component{

    state={
        userName : '',
        age : '',
        profession : '',
        address : '',
        password : [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }

    setPassword = (x) => {
        const temp = this.state;
        this.setState({
            ...temp,
            password: x
        })
    }

    setUserName = (e) => {
        const val = e.target.value;
        const temp = this.state;
        this.setState({
            ...temp,
            userName: val
        })
    }

    setAge = (e) => {
        const val = e.target.value;
        const temp = this.state;
        this.setState({
            ...temp,
            age: val
        })
    }

    setProfession = (e) => {
        const val = e.target.value;
        const temp = this.state;
        this.setState({
            ...temp,
            profession: val
        })
    }

    setAddress = (e) => {
        const val = e.target.value;
        const temp = this.state;
        this.setState({
            ...temp,
            address: val
        })
    }

    HandleSubmit = () => {
        database.ref(`/accounts/${this.state.userName}`).set({
            age: this.state.age,
            profession: this.state.profession,
            address: this.state.address,
            password: this.state.password
        })
        this.props.history.push('/');
    }

     render(){
          return(
            <div className='container'>
                <h1>Register Page</h1>
                <form className='form'>
                    <div className='UserName'>
                        <label>User Name :</label>
                        <input type='text' onChange={this.setUserName}/>
                    </div>
                    <div className='UserName'>
                        <label>Age :</label>
                        <input type='text' onChange={this.setAge}/>
                    </div>
                    <div className='UserName'>
                        <label>Profession :</label>
                        <input type='text' onChange={this.setProfession}/>
                    </div>
                    <div className='UserName'>
                        <label>Address :</label>
                        <input type='text' onChange={this.setAddress}/>
                    </div>
                    <DD setPassword={this.setPassword}/>
                </form>
                    <button className='submit' onClick={this.HandleSubmit} >Submit</button>
            </div>
        );
    }
}

export default RegisterPage;