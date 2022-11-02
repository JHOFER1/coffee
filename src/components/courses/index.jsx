import user from './img/user.png';
import edit from './img/edit.png';
import inbox from './img/envelope.png';
import settings from './img/settings.png';
import help from './img/question.png';
import logout from './img/log-out.png';
import './index.scss';
import React, {useState, useEffect, useRef} from 'react';

const Courses=()=>{
const [open, setOpen] = useState(false); //Inicializamos una variable de estado en false
let menuRef = useRef();//

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

return(
<>  <div className="mainContainerCourses">
        <div className="courserContainer">
            <h1>Curso de React</h1>
              <img className='imagenCourses' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwHGcKYqvBVG0u5WT2aYpbKBaxnIw2pvuWA&usqp=CAU' alt="Cursos"/>
            <h3>Diseña tus pagins web y React se encargara de actualizar y renderizar
                de manera eficiente los componentes
            </h3>

                  <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    <button className='buttonCourser'>Acciones</button>
                    </div>
                      <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
                        {/* <h3 className='h3Courser'>Menu<br/><span> Descripcion</span></h3> */}
                        <ul className='ulDropdown'>
                        <DropdownItem img = {user} text = {"My Profile"}/>
                        <DropdownItem img = {edit} text = {"Edit Profile"}/>
                        <DropdownItem img = {inbox} text = {"Inbox"}/>
                        <DropdownItem img = {settings} text = {"Settings"}/>
                        <DropdownItem img = {help} text = {"Helps"}/>
                        <DropdownItem img = {logout} text = {"Logout"}/>
                        </ul>
                      </div>                
                  </div>
        </div>
    </div>
</>    
);
}

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}
export default Courses;
