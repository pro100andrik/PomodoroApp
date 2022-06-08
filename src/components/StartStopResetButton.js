const StartStopResetButton = props => {
  return (
    <>
    <div>
    <button onClick={props.changeStatus}> {props.isActive ? 'Pause' : 'Start'} </button>
    </div>
    {props.resetActive
      ?
    <div>
    <button onClick={props.handleReset}> Reset </button>
    </div>
    :
    null}
    </>
  )
}

export default StartStopResetButton
