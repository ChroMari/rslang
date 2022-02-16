import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { toggleTime } from './TimerSlice';

export const Timer = () => {
  const dispatch = useDispatch()

  let currentTime = useSelector((state:RootStore) => state.toggleTime.currentTime)

  const timerInterval = setInterval(() => {
      dispatch(toggleTime(--currentTime))
    }, 1000)

  if (currentTime <= 1) {
    dispatch(toggleTime(0))
    clearInterval(timerInterval)
  }

  return (
      <div className={'round-timer'}>{currentTime}</div>
  )
}
