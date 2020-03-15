import React from 'react';
import '../style/tile.scss';

class Tile extends React.Component{


    allowDrop = (ev) => {
        // let event = ev as Event;
        // event.preventDefault();

        ev.preventDefault();
        // console.log('i');
      }

    drag = (ev) => {
        // ev.dataTransfer.setData("text", ev.target.id);
        // console.log('b');
        if(this.props.changeMat){
            this.props.changeMat(this.props.i, this.props.j, 0);
        }
        else{
            
        }
        this.props.setTemp(this.props.val);
        // console.log('dragging ' + this.props.val);
      }
      
    drop = (ev) => {
        // ev.preventDefault();
        // var data = ev.dataTransfer.getData("text");
        // ev.target.appendChild(document.getElementById(data));
        // console.log('c');
        if(this.props.getTemp){
            var value = this.props.getTemp();
            // console.log("current val " + value);
        }
        if(this.props.changeMat){
            this.props.changeMat(this.props.i, this.props.j, value);
        }
        // console.log('dropping ' + this.props.val);
      }

    render(){
        return(
            <div 
            className='tile'
            onDrop={this.drop} 
            onDragOver={this.allowDrop}
            >
                <img 
                alt='img'
                src={`images/${this.props.val}.png`} 
                draggable="true" 
                onDragStart={this.drag}
                />
            </div>
        );
    }
}

export default Tile;