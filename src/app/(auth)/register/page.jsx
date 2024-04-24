
const RegisterPage = () => {


  return (
    <main>
      <div className="px-[150px] py-32">
        <div className="mb-6">
          <img className="h-6" src="/assets/icons/logo.svg" alt="" />
        </div>
        <div className="w-full flex">
          <div className="w-1/2 space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">First name :</label>
                <input
                  className="border-2 rounded-md px-4 py-2"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Last name :</label>
                <input
                  className="border-2 rounded-md px-4 py-2"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">Email :</label>
                <input
                  className="border-2 rounded-md px-4 py-2"
                  type="text"
                  placeholder="visay@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Mobile No :</label>
                <input
                  className="border-2 rounded-md px-4 py-2"
                  type="text"
                  placeholder="+855 9675313111"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">Password :</label>
                <input
                  className="border-2 rounded-md px-4 py-2"
                  type="text"
                  placeholder="xxxxxxxxx"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Comfirm Password :</label>
                <input
                  className="border-2 rounded-md px-4 py-2"
                  type="text"
                  placeholder="xxxxxxxxx"
                />
              </div>
            </div>
            <button className="w-fit bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold">
              Sign up
            </button>
          </div>
          <div className="img h-70px w-1/8 flex justify-center">
            <img src="assets/icons/sign-up.svg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
