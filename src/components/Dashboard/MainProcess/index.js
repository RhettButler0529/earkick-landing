import MainProcessSteps from "components/Dashboard/MainProcessSteps"
import "./style.scss"

import ProcessSteps from "constants/ProcessSteps"

const generateSteps = () =>
  ProcessSteps.map((step, index) => (
    <MainProcessSteps
      key={index}
      image={step.image}
      title={step.title}
      comment={step.comment}
      color={step.color}
    />
  ))

const MainProcess = () => (
  <div className="main-process">
    <p>How does Earkick work?</p>
    <div className="main-process-step flex">{generateSteps()}</div>

  </div>
)

export default MainProcess
