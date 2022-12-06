
import imgcoffee from '../../../../assets/coffee.png'
import './index.scss';


import React, {useState, useEffect, useRef} from 'react';

function Sign() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="Apsign">
      <div className='menu-sign' ref={menuRef}>
        
        <div className='menu-trigger-sign' onClick={()=>{setOpen(!open)}}>
          {/* <img src={user}></img> */}
          <button className='enter'>Log</button>
        </div>
        <div className={`dropdown-menu-sign ${open? 'active' : 'inactive'}`}>
          <h3 className='welcome'>
          <img className='coffee-img' src={imgcoffee} alt="IMAGENLOGO"/>
          <br/>
          Te damos la bienvenida a <br/>
          Coffee</h3>

          <h3 className='correo'>Correo Electronico</h3>    
                <form className='formcorreo' action="/" method='get'>
                <input 
                type="text"
                placeholder="correo"
                name="s"/>
                </form>
          <h3 className='correo'>Contraseña</h3>    
                <form className='formcorreo' action="/" method='get'>
                <input 
                type="text"
                placeholder="contraseña"
                name="s"/>
                </form>
          <a href='/resetPassword'>¿Olvidaste la contraseña?</a>
          <br/>
          <button>Log</button> 
        </div>
      
      </div>
    </div>
  );
}

export default Sign;
