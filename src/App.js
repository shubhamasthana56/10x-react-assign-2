import "./App.css";
const App= (props)=> {
  return (
    <>
    <div className="container">
      <div className="image-wrapper">
      <img className="user-image"src={props.employee.profileImg} alt="profileImage"/>
      </div>
      <div className="user-name">{props.employee.name}</div>
      <div className="user-detail">
        <p className="user-detail__label">Location</p>
        <p className="user-detail__item">{props.employee.location}</p>
        <p className="user-detail__label">Blood group</p>
        <p className="user-detail__item">{props.employee.bloodGroup}</p>
        <p className="user-detail__label">Age</p>
        <p className="user-detail__item">{props.employee.age}</p>
      </div>
      
    </div>
    </>
  )
}
export default App;