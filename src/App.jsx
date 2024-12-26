function App() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1600px] h-[931px] flex justify-between items-center">
          <div className="w-[90%] max-w-[552px] h-[642px] mx-auto">
            <header>
              <h1 className="font-montserrat text-[5vw] font-semibold leading-[121.9px] text-left decoration-skip-none text-[rgba(16,26,28,0.84)]">
                LOGIN
              </h1>
            </header>
            <section>
              <form className="space-y-8">
                <div>
                  <input
                    className="w-full max-w-[527px] h-[62px] rounded-[10px] border-[1px] font-montserrat text-lg font-normal leading-6 text-left underline-from-font decoration-none text-[rgba(16,26,28,0.84)]"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <input
                    className="w-full max-w-[527px] h-[62px] rounded-[10px] border-[1px] font-montserrat text-lg font-normal leading-6 text-left underline-from-font decoration-none text-[rgba(16,26,28,0.84)]"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="w-[222px] h-[64px] rounded-[10px]"
                  >
                    <img src="./images/Group 1.png" alt="Submit" />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[246px] h-[1px] border-[1px] text-[rgba(16,26,28,1)]"></div>
                  <span className="font-montserrat text-2xl font-semibold leading-[30.48px] text-left underline-from-font decoration-none text-[rgba(16,26,28,1)]">
                    OR
                  </span>
                  <div className="w-[246px] h-[1px] border-t border-[1px]"></div>
                </div>
                <footer className="space-y-8">
                  <div className="flex justify-evenly">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="w-[30px] h-[30.64px]"
                    >
                      <img src="./images/image 1.png" alt="Facebook" />
                    </button>
                    <button
                      type="button"
                      onClick={handleClick}
                      className="w-[30px] h-[30.64px]"
                    >
                      <img src="./images/image 2.png" alt="Google" />
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="w-full max-w-[517px] h-[30px] font-montserrat text-[18px] font-semibold leading-[30.48px] text-left text-[rgba(16,26,28,0.64)] underline-from-font decoration-none ml-10"
                    >
                      Not yet registered? Click here to sign up
                    </button>
                  </div>
                </footer>
              </form>
            </section>
          </div>
          <div className="w-[45%] hidden lg:block">
            <img
              className="w-full max-w-[800px] h-auto rounded-[200px_0px_0px_200px]"
              src="./images/image 3.png"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
