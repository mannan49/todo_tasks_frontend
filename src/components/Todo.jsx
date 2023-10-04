import { useState } from "react";
import {AiFillDelete} from "react-icons/ai"
import {BiSolidEditAlt} from  "react-icons/bi"

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (
        <li
            className="bg-gray-700 p-4 m-1 overflow-x-hidden rounded-md cursor-pointer"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
        >
            <span className="text-white" style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="w-10/12 text-xl bg-white text-gray-500 rounded-md px-4 py-1 border-solid"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <div className="flex items-center justify-center float-right gap-x-3">
            <span  onClick={() => dispatch(deleteTodo(todo._id))}>
                <AiFillDelete  className="text-white text-xl"/>
            </span>
            <span onClick={() => setEditing(prevState => !prevState)}>
                <BiSolidEditAlt className="text-white text-xl"/>
            </span>
            </div>
        </li>
    )
}

export default Todo;