import React from "react";
import {CardCourses} from './cardCourses';
import text1 from '../../assets/new1.txt';
import text2 from '../../assets/new2.txt';
import { useState } from "react";

export const Courses =()=>{
// CURSO 1 TEXTO
const[raw, setRaw]=useState("");
fetch(text1)
.then(r=>r.text())
.then(text=>{setRaw(text)});
//CURSO 2 TEXTO
const[raw1, setRaw1]=useState("");
fetch(text2)
.then(r=>r.text())
.then(text=>{setRaw1(text)});


return(
<>
<div className="mainContainerCourses">
 <CardCourses description={raw} coursesName="Curso de React"/>
 <CardCourses description={raw1} coursesName="Nodejs"/>   
 <CardCourses description={raw} coursesName="Curso de React"/>   
 <CardCourses description={raw} coursesName="Curso de React"/>   
 <CardCourses description={raw1} coursesName="Nodejs"/>   
</div>
</>
);
}

export default Courses;