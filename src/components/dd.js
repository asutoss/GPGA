import React from 'react';
import Matrix from './matrix';
import '../style/dd.scss';

const DD = (props) => (
    <div>
        <h2>Graphic Password</h2>
        <Matrix setPassword={props.setPassword}/>
    </div>
);

export default DD;
