import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from "../features/goals/goalSlice"
import {toast} from "react-toastify"

function GoalForm() {

    const dispatch = useDispatch();

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            toast.error("Goal cannot be empty")
        }
        dispatch(createGoal({ text }))
        toast.success("Goal added")
        setText('')
    }
    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">
                        Goal
                    </label>
                    <input type='text' name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className='btn btn-block' type='submit'>
                        Add Goal
                    </button>
                </div>
            </form>
        </ section>
    )
}

export default GoalForm