
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Profile
          fullName={"Abdelkader Manoubi"}
          profession={"Full Stack Developer"}
          bio="A Full Stack Developer with experience in Javascript, React,  etc...."
          handleName={handleName}
        >
          <img
            src="https://scontent.ftun9-1.fna.fbcdn.net/v/t31.18172-8/28162157_1041048369366655_8932871896041038714_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=SgCwK_3Vn70AX9nbdlX&_nc_ht=scontent.ftun9-1.fna&oh=9c92309f5d274fab43c4c6d2adc6227b&oe=60C8457E"
            alt=""
            style={{ borderRadius: "15px", width: "300px" }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;