// Exportamos 
import imgcoffee from '../../assets/coffee.png'
import './index.scss';
import React, {useState, useEffect, useRef} from 'react';

// funcion register
function Register() {

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
    <div className="apRegister">
      <div className='menu-register' ref={menuRef}>
        
        <div className='menu-trigger-register' onClick={()=>{setOpen(!open)}}>
          <button className='register'>Regístrate</button>
        </div>
        <div className={`dropdown-menu-register ${open? 'active' : 'inactive'}`}>
          <h3 className='welcomeRegister'>
          <img className='coffee-img' src={imgcoffee} alt="IMAGENLOGO"/>
          <br/>
          Te damos la bienvenida a <br/>
          Coffee</h3>

          <h3 className='correoRegister'>Correo Electronico</h3>    
                <form className='formCorreoRegister' action="/" method='get'>
                <input 
                type="text"
                placeholder="correo"
                name="s"/>
                </form>
          <h3 className='correoRegister'>Contraseña</h3>    
                <form className='formcorreo' action="/" method='get'>
                <input 
                type="text"
                placeholder="contraseña"
                name="s"/>
                </form>
          <h3 className='correoRegister'>Edad</h3>    
                <form className='formcorreo' action="/" method='get'>
                <input 
                type="num"
                placeholder="Edad"
                name="s"/>
                </form>
          <button>Regístrate</button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Register;
