import React from 'react';
import Tile from './tile';
import '../style/matrix.scss';

const mat = [
    [1, 2],
    [3, 4],
    [5, 6]
]

class Matrix extends React.Component{
    state = {
        mat: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        block : 6
    }
    
    changeMat = (i,j,val) => {
        var temp = this.state.mat;
        var bblock = this.state.block;
        temp[i][j]=val;
        this.setState({
            mat: temp,
            block : bblock
        });
        if(this.props.setPassword){
            this.props.setPassword(this.state.mat);
        }
        // console.log(this.state);
    }

    getTemp = () => this.state.block ;

    setTemp = (val) => {
        var temp = this.state.mat;
        var bblock = this.state.block;
            bblock=val;
        this.setState({
            mat: temp,
            block : bblock
        });
    }

    render(){
        return(
            <div>
                <div className = 'mat'>
                        <h3>Grid</h3>
                        <div className ='row'>
                            <Tile val={this.state.mat[0][0]} i={0} j={0} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[0][1]} i={0} j={1} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[0][2]} i={0} j={2} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[0][3]} i={0} j={3} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                        </div>
                        <div className = 'row'>
                            <Tile val={this.state.mat[1][0]} i={1} j={0} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[1][1]} i={1} j={1} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[1][2]} i={1} j={2} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[1][3]} i={1} j={3} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                        </div>
                        <div className = 'row'>
                            <Tile val={this.state.mat[2][0]} i={2} j={0} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[2][1]} i={2} j={1} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[2][2]} i={2} j={2} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                            <Tile val={this.state.mat[2][3]} i={2} j={3} changeMat={(i,j,val) => this.changeMat(i,j,val)} getTemp={this.getTemp} setTemp={this.setTemp} />
                        </div>
                    
                </div>
                
                <div className='Options'>
                <h3>Options</h3>
                <div className ='row'>
                        <Tile val={mat[0][0]} setTemp={this.setTemp} />
                        <Tile val={mat[0][1]} setTemp={this.setTemp} />
                    </div>
                    <div className = 'row'>
                        <Tile val={mat[1][0]} setTemp={this.setTemp} />
                        <Tile val={mat[1][1]} setTemp={this.setTemp} />
                    </div>
                    <div className = 'row'>
                        <Tile val={mat[2][0]} setTemp={this.setTemp} />
                        <Tile val={mat[2][1]} setTemp={this.setTemp} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Matrix;