

function App() {
  const handleClick = (e) =>{
    e.preventDefault()

  }

  return (
    <>
   <div className="w-full h-screen flex justify-center">
    <div className="w-[1600px] h-[931px] top-[-466px] left-[-800px]  flex justify-between items-center">
<div className="w-[552px] h-[642px] top-[191px] left-[128px] ml-[120px] ">
  <header>
<h1 className='font-montserrat text-[100px] font-semibold leading-[121.9px] text-left decoration-skip-none text-[rgba(16,26,28,0.84)] '>
LOGIN</h1>
  </header>
  <section>
<form  className="space-y-8">
  <div>
<input className="w-[527px] h-[62px] top-[157px] left-[14px] rounded-[10px] border-[1px] font-montserrat text-lg font-normal leading-6 text-left underline-from-font decoration-none text-[rgba(16,26,28,0.84)]"  placeholder="Username"/>
  </div>
  <div>
<input  className="w-[527px] h-[62px] top-[259px] left-[14px] rounded-[10px]  border-[1px] font-montserrat text-lg font-normal leading-6 text-left underline-from-font decoration-none text-[rgba(16,26,28,0.84)]" placeholder="Password"/>
  </div>
  <div>
<button type="button" onClick={handleClick} className="w-[222px] h-[64px] top-[366px] left-[14px] rounded-[10px] duration-0 bg-[rgba(16,26,28,0.84)] text-[24px] text-white font-montserrat ">  LOGIN </button>
  </div>
<div className="flex justify-between items-center">
<div className="w-[246px] top-[474px]  h-[1px]  border-[1px] text-[rgba(16,26,28,1)]"></div>
<span className='font-montserrat text-2xl font-semibold leading-[30.48px] text-left underline-from-font decoration-none text-[rgba(16,26,28,1)]'>OR</span>
<div className="w-[246px] top-[474px]  h-[1px] border-t border-[1px]"></div>  
</div>
<footer className="space-y-8" >
<div className="flex justify-evenly">
<button type="button" onClick={handleClick} className="w-[30px] h-[30.64px] top-[529px] left-[206px]"><img src="./images/image 1.png"/></button>
<button type="button" onClick={handleClick} className="w-[30px] h-[30.64px] top-[529px] left-[317px]"><img src="./images/image 2.png"/></button>
</div>
<div className="flex justify-center">
<button type="button" onClick={handleClick} className="w-[517px] h-[30px] top-[612px] left-[14px] font-montserrat text-[25px] font-semibold leading-[30.48px] text-left text-[rgba(16,26,28,0.64)] underline-from-font decoration-none ml-10">Not yet registered , Click here to sign up</button>
</div>
</footer>
</form>


</section>

</div>

<inside>
<img className="w-[800px] h-[900px] left-[811px] rounded-[200px_0px_0px_200px]  " src="./images/image 3.png"></img>
</inside>






    </div>







   </div>
    </>
  )
}

export default App
