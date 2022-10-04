import React,{useState} from "react"

const MoreState = () => {
     
    const arrayOfFruits = ['pear', 'mongo', 'orange']
    const[fruits, setFruits] = useState(['banana']);
    const [todo, setTodo] = useState([{
         task: 'Write react',
    }])

    const firstChange = () => {
         setFruits(arrayOfFruits[0])
    }
    const secondChange = () => {
         setFruits(arrayOfFruits[1])
    }
    const thirdChange = () => {
         setFruits(arrayOfFruits[2])
    }


     return(
         <React.Fragment>
            <p>The name of the fruit is {fruits}</p>
            <button onClick={firstChange} className='btn btn-success'>Pear</button>
            <button onClick={secondChange} className='btn btn-warning'>Mongo</button>
            <button onClick={thirdChange} className='btn btn-danger'>Orange</button>
            <div>
                 <p>My first task is {todo[0].task}</p>
            </div>
         </React.Fragment>
     )
}

export default MoreState;