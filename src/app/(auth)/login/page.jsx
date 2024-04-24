'use client'
import {signIn} from 'next-auth/react';

const LoginPage = () => {
  // define handle register
  async function handleLogin (userInto) {

    // define structure object
    const newUserInfo = {
      email: userInto.get("email"),
      password: userInto.get("password")
    } 
    
    // calling next auth service and passing "newUserInfo"
    const res = signIn('credentials', {
      redirect: false,
      ...newUserInfo,
    })
  }

  return (
    <dev className="top w-full px-32 py-8">
      <div className="px-[150px] py-32">
        <img className="h-6" src="/assets/icons/logo.svg" alt="" />
      </div>

      <div className="contain w-full flex mt-10">
        <div className="form w-1/2 flex flex-col justify-evenly">
          <div class="from flex flex-col justify-center ">
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Login
                    </h1>
                    <form
                    action={handleLogin}
                      class="form-control space-y-4 md:space-y-6"
                    >
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div>
                        <button className="btn btn-activ w-full ">Login</button>
                      </div>
                      <div>
                        <label htmlFor="">Don't have an account?</label>
                        <label className="text-blue-700 ml-2" htmlFor="">
                          Rigester
                        </label>
                      </div>
                      <div className="button">
                        <button className="btn btn-activ w-full flex">
                          <div className="logo">
                            <img
                              className=" h-7"
                              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                              alt=""
                            />
                          </div>
                          <div className="text font-medium"> Google</div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="text justify-center mt-24 mx-10">
            @2024 My office. All Right Reserved
          </div>
        </div>
        <div className="image w-1/2 flex justify-center ">
          <img className="h-[70vh]" src="/assets/icons/login.svg" alt="" />
        </div>
      </div>
    </dev>
  );
};

export default LoginPage;
