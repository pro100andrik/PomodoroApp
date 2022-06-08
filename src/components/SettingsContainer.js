
const SettingsContainer = props => {
  const changeTime = e => {
    props.changeFinalTime(e.target.value, e.target.id)
  }
  return (
    <div className="settings-container">
    <div className='caption'> Settings: </div>
      <div className='option'>
        <label htmlFor="pomodoro">Pomodoro time: </label>
        <input id="pomodoro" type="number" min="0" name="pomodoro" value={props.typeTime.pomodoro} onChange={changeTime}/>
      </div>
      <div className='option'>
        <label htmlFor="shortBreak">Short Break time: </label>
        <input id="shortBreak" type="number" min="0" name="shortBreak" value={props.typeTime.shortBreak} onChange={changeTime} />
      </div>
      <div className='option'>
        <label htmlFor="longBreak">Long Break time: </label>
        <input id="longBreak" type="number" min="0" name="longBreak" value={props.typeTime.longBreak} onChange={changeTime}/>
      </div>
    </div>
  )
}

export default SettingsContainer
