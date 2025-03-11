import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from "../features/goals/goalSlice"
import { toast } from 'react-toastify'

function GoalItem({ goal }) {

    const dispatch = useDispatch()

    return (
        <div className='goal'>
            <div>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{goal.text}</h2>
            <button
                className='edit'
                onClick={() => {
                    dispatch(updateGoal(goal))
                }}
            >
                Edit
            </button>
            <button
                className='close'
                onClick={() => {
                    dispatch(deleteGoal(goal._id))
                    toast.success("Goal deleted")
                }}
            >
                X
            </button>
        </div>
    )
}

export default GoalItem