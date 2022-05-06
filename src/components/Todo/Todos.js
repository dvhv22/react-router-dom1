import { useState, useEffect } from 'react';
import './Todo.css';

const Todos = (props) => {
    const [Todo, setTodo] = useState(props.Todo);
    const [work, setWork] = useState("");
    const [workEdit, setWorkEdit] = useState({});
    const status = Object.keys(workEdit).length === 0;
    //const [change, setChange] = useState("");


    const handleOnchange = (event) => {
        setWork(event.target.value);

    }
    const handleOnClickadd = () => {
        if (!work) {
            alert("empty input")
            return;
        }
        let todo = { id: Math.floor(Math.random() * 1000), title: work };
        setTodo([...Todo, todo]);

        setWork("");
    }

    const handleOnclickdelete = (item) => {
        console.log(item);
        let copyTodo = Todo.filter(title => title.id !== item.id);
        setTodo(copyTodo);


    }
    const handleOnClickedit = (item) => {

        // click save event
        if (!status && workEdit.id === item.id) {
            let arrCopy = [...Todo]
            let objIndex = arrCopy.findIndex((obj => obj.id === workEdit.id));
            arrCopy[objIndex].title = workEdit.title;
            setTodo(arrCopy);
            setWorkEdit({});
            return;
        }

        // click edit event
        setWorkEdit(item);
        // function excute follow event so specially focus on events


    }

    //console.log('check run2>>>');

    const handleOnchangeEdit = (e) => {
        let editcopy = { ...workEdit };
        editcopy.title = e.target.value;
        setWorkEdit(editcopy);
        // let newArr = [...Todo]; // copying the old datas array
        // newArr[index].title = event.target.value; // replace e.target.value with whatever you want to change it to

        // setTodo(newArr);


    }

    useEffect(() => {
        //if (!status) {
        //console.log(workEdit);
        // }
        //console.log('check run4>>>');
    })



    return (
        <div className='todo'>
            <div className='add'>
                <input className='input-todo' type="text" placeholder='enter your work to do here' size='30' value={work} onChange={(event) => handleOnchange(event)} ></input>
                <button onClick={() => handleOnClickadd()}>Add</button>
            </div>

            <ol>
                {Todo.map((item, index) => {
                    return (

                        <li key={item.id}>
                            {!status && item.id === workEdit.id ?
                                <>
                                    <input value={workEdit.title} onChange={(event) => handleOnchangeEdit(event)} />
                                </>
                                :
                                <>{item.title}</>
                            }
                            <button onClick={() => handleOnclickdelete(item)}>Delete</button>
                            <button onClick={() => handleOnClickedit(item)}>
                                {!status && item.id === workEdit.id ?
                                    'Save' : 'Edit'}
                            </button>

                        </li>
                    )
                })}
            </ol>
        </div>

    )
}
export default Todos;