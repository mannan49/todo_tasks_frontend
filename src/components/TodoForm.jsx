import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="w-full lg:w-2/5 px-2" onSubmit={onFormSubmit}>
            <input  
                placeholder="Please enter new todo..."
                className="w-full my-2 text-xl px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-500"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;