import React from 'react';
import DD from './dd';
import database from '../firebase/firebase';
import '../style/LoginPage.scss';

class LoginPage extends React.Component {

    state={
        userName : '',
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

    HandleSubmit = () => {
        database.ref(`/accounts/${this.state.userName}`).once('value').then((snapshot) => {
            
            var flag=true;

            if(snapshot.val()){
                const temp = snapshot.val().password;

                for(var i=0;i<3;i++){
                    for(var j=0;j<4;j++){
                        if(temp[i][j]!==this.state.password[i][j]){
                            flag=false;
                        }
                    }
                }
    
            }else{
                flag=false;
            }

            if(flag){
                console.log("Logged In");
                console.log("welcome " + this.state.userName);
                console.log('Age : ' + snapshot.val().age);
                console.log('Profession : ' + snapshot.val().profession);
                console.log('Address : ' + snapshot.val().address);
                this.props.history.push('/');
            }
            else{
                console.log("Wrong UserName or Password");
            }

        })

    }

     render(){
          return(
            <div className='container'>
                <h1>Login Page</h1>
                <form className='form'>
                    <div className='UserName'>
                        <label>User Name :</label>
                        <input type='text' onChange={this.setUserName} />
                    </div>
                <DD setPassword={this.setPassword}/>
                </form>
                <button className='submit' onClick={this.HandleSubmit}>Submit</button>
            </div>
        );
    }
}

export default LoginPage;