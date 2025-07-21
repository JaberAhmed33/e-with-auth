import FormLogin from "./FormLogin";
import frame from "../../../public/Frame.png";

function Login() {

  return (
    <div className="flex max-h-screen overflow-clip relative items-center justify-center h-screen font-abee">
       {/* Glow 1 */}
      <div className="absolute -top-[20%] left-[30%] w-96 h-96 bg-[#8505c6] rounded-full opacity-40 blur-[120px] shadow-[0_0_80px_#c052f7] pointer-events-none"></div>

      {/* Glow 2 */}
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-[#8f4de3] rounded-full opacity-20 blur-[100px] shadow-[0_0_70px_#8f4de3] pointer-events-none"></div>

         {/* Glow 3 */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#d271ff] rounded-full opacity-25 blur-[90px] shadow-[0_0_60px_#d271ff] pointer-events-none"></div>

      <div className="flex flex-col w-full flex-2/5 items-center justify-center">
       <FormLogin /> 
      </div>
      <div className="flex flex-3/5 flex-col items-center justify-center">
        <img src={frame} alt="frame" className="w-[70%] object-cover" />
      </div>
    </div>
  );
}

export default Login