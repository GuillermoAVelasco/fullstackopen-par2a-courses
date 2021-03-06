import React from 'react'

const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>    
    )
}
  
const Part= (props)=> {
    console.log(props)
    return (
      <p>
        {props.part.name} {props.part.exercises}  
      </p>
    )
}
  
const Content = ({parts}) => {
    return (
      <div>
          {parts.map(part => (<Part key={part.name} part={part} />))} 
        </div>    
    )
}
  
const Total = ({parts}) => {
    const total = parts.reduce((s, p) =>  s + p.exercises,0)
  
    return (
      <p>
        Total of exercises {total} 
      </p>    
    )
}

const Course=({course})=>{
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )  
}

export default Course