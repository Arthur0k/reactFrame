import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from '../hooks'
import { decrement, increment } from '../reducers/counter'

const Counter = (): JSX.Element => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  console.log('1')

  return (
    <div>
      <input type="text" value={value} onChange={setValue}/>
      {/* <div>
        <button
          aria-label="increment value"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
      </div>
      <span>{count}</span>
      <button
        aria-label="decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decreament
      </button> */}
    </div>
  )
}

export default Counter
