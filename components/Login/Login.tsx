const Login = () => {
  async function loginWithGithub() {
    window.location.assign("http://localhost:3000/auth/github");
  }

  return (
    <div className="h-screen bg-black flex">
      <div className=" w-1/2">
        <img
          src="/assets/Keddit_Logo_Text.png"
          alt="Keddit Logo text"
          className="h-full w-fit object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-12 text-white">
          Here Now, Here Always
        </h1>
        <button
          onClick={loginWithGithub}
          className="bg-white rounded-full px-12 py-2 flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200"
        >
          <i className="text-lg fa-brands fa-github"></i>
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
