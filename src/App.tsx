import NavigationBar from "../components/NavigationBar/NavigationBar";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import UserIndex from "../components/UserIndex/UserIndex";
import CreatePostForm from "../components/CreatePostForm/CreatePostForm";

function App() {
  return (
    <div>
      <NavigationBar />
      <CreatePostForm />
    </div>
  );
}

export default App;
