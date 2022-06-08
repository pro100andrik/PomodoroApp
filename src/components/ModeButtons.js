const ModeButtons = props => {
    return (
      <div>
      <button onClick={() => props.changetype('pomodoro')} className={(props.type === 'pomodoro' ? 'active' : '')}> Pomodoro </button>
      <button onClick={() => props.changetype('shortBreak')} className={(props.type === 'shortBreak' ? 'active' : '')}> Short Break </button>
      <button onClick={() => props.changetype('longBreak')} className={(props.type === 'longBreak' ? 'active' : '')}> Long Break </button>
      </div>
    )
}
export default ModeButtons
