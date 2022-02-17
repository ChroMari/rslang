import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { toggleTime } from './TimerSlice';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const dispatch = useDispatch()

  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    if (seconds === 0) {
      dispatch(toggleTime(0))
    } else {
      setTimeout(() => {
        setSeconds((prevState) => {
          return prevState - 1
        })
      }, 1000)

      dispatch(toggleTime(seconds))
    }
  }, [seconds])

  return (
      <div className={'round-timer'}>{seconds}</div>
  )
}
