import "./style.scss"

const MainProcessSteps = ({ image, title, comment, color }) => (
  <div className="main-process-steps flex flex-column">
    <div className="main-process-steps-image flex" style={{backgroundColor: color, borderRadius: '10px 10px 0 0' }}>
      <img src={image} alt="steps" />
    </div>
    <div className="main-process-steps-title" style={{color: color}}>{title}</div>
    <div className="main-process-steps-comments">{comment}</div>
  </div>
)

export default MainProcessSteps
