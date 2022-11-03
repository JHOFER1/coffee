
import { Link } from "react-router-dom";
import React from "react";
export const DropdownItem=(props)=>{
    return(
      <li className='dropdownItem'>
        <img src={props.img} alt='none'></img>
        <Link to={props.url}>
        {props.text}
        </Link>
      </li>
    );
  }