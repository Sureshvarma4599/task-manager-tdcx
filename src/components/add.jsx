import React from 'react';
import Popup from 'reactjs-popup';
import '../App.css'
import New from './new'
export default () => (
  <Popup
    trigger={<button className="button" style={{width:"100px"}}> +New Task</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
       
       <New/>
        
      </div>
    )}
  </Popup>
);