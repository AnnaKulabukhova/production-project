import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
const [increment, setIncrement] = useState(0)

  return (
    <div className={classes.button}>
    <h1>{increment}</h1>
    <button onClick={() => setIncrement(increment + 1)}>Increment</button>
    </div>
  )
}
