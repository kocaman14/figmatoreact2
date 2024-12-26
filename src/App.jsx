function App() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-50">
        <div className="max-w-[552px] w-full h-auto flex flex-col justify-center items-center p-6">
          <header>
            <h1 className="font-montserrat text-[48px] sm:text-[72px] font-semibold text-center text-[rgba(16,26,28,0.84)]">
              LOGIN
            </h1>
          </header>
          <section>
            <form className="space-y-8 w-full">
              <div>
                <input
                  className="w-full h-[62px] rounded-[10px] border-[1px] font-montserrat text-lg text-left text-[rgba(16,26,28,0.84)]"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  className="w-full h-[62px] rounded-[10px] border-[1px] font-montserrat text-lg text-left text-[rgba(16,26,28,0.84)]"
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleClick}
                  className="w-full h-[64px] rounded-[10px] bg-[rgba(16,26,28,0.84)] text-white font-montserrat text-[24px]"
                >
                  LOGIN
                </button>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="w-full h-[1px] border-[1px] border-t text-[rgba(16,26,28,1)]"></div>
                <span className="font-montserrat text-2xl font-semibold text-center text-[rgba(16,26,28,1)]">OR</span>
                <div className="w-full h-[1px] border-t border-[1px]"></div>
              </div>
              <footer className="space-y-8 w-full">
                <div className="flex justify-evenly w-full">
                  <button type="button" onClick={handleClick} className="w-[30px] h-[30px]">
                    <img src="./images/image 1.png" alt="icon 1" />
                  </button>
                  <button type="button" onClick={handleClick} className="w-[30px] h-[30px]">
                    <img src="./images/image 2.png" alt="icon 2" />
                  </button>
                </div>
                <div className="flex justify-center w-full">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="w-full text-center text-[16px] font-semibold text-[rgba(16,26,28,0.64)]"
                  >
                    Not yet registered, Click here to sign up
                  </button>
                </div>
              </footer>
            </form>
          </section>
        </div>

        <div className="hidden lg:block lg:w-[800px] lg:h-[800px] lg:ml-[50px] rounded-[200px_0px_0px_200px]">
          <img className="w-full h-auto object-cover" src="./images/image 3.png" alt="Image" />
        </div>
      </div>
    </>
  );
}

export default App;
