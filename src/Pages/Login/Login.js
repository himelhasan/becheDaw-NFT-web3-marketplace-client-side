import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../media/siteicon.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import Btn from "../../Shared/Btn";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/updateProfile";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { emailLogin, gmailLogin, githubLogin } = useContext(AuthContext);

  const [err, setErr] = useState({
    general: "",
  });

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const pass = data.password;
    console.log(email);
    console.log(pass);

    emailLogin(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          navigate(from, { replace: true });
          setErr({ ...err, general: "" });
        }
      })
      .catch((error) => {
        setErr({ ...err, general: error });
        console.error(error);
      });
  };

  const logInWithGoogle = () => {
    gmailLogin()
      .then((res) => {
        const user = res.user;
        if (user) {
          setErr({ ...err, general: "" });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setErr({ ...err, general: error });

        console.error(error);
      });
  };

  const logInWithGithub = () => {
    githubLogin()
      .then((res) => {
        const user = res.user;
        setErr({ ...err, general: "" });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr({ ...error, general: error });

        console.error(error);
      });
  };

  return (
    <div>
      <section class="h-full gradient-form bg-gray-200 md:min-h-screen py-32">
        <div class="container mx-auto py-12 px-6 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 py-12 text-gray-800">
            <div class="xl:w-10/12 mx-auto">
              <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="text-center">
                        <img class="mx-auto w-48" src={logo} alt="logo" />
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Login</h4>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p class="mb-4">Please login to your account</p>
                        <div class="mb-4">
                          <input
                            {...register("email", {
                              required: "Please enter your email address",
                            })}
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            {...register(
                              "password",
                              { required: "Please enter your password" },
                              { pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/ }
                            )}
                            type="password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                          />
                        </div>
                        <div class="text-center pt-1 mb-12 pb-1">
                          <input
                            type="submit"
                            class="bg-gradient-to-r to-[#ee7724] via-[#dd3675] from-[#b44593]  inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          />

                          {errors.exampleRequired && (
                            <p className="text-red-600 ">This field is required</p>
                          )}
                          <p className="text-red-600 ">{err.general}</p>

                          <a class="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-[#dd3675]">
                              Register
                            </Link>
                          </p>
                        </div>
                        <div class="flex items-center justify-center gap-2 pb-6">
                          <button
                            onClick={logInWithGoogle}
                            type="button"
                            class="w-full px-6 py-2 border-2 border-[#dd3675] text-[#dd3675] btn-outlined font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Login with Google
                          </button>
                          <button
                            onClick={logInWithGithub}
                            type="button"
                            class="w-full px-6 py-2 border-2 border-[#dd3675] text-[#dd3675] btn-outlined font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            {" "}
                            Login with Github
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r to-[#ee7724] via-[#dd3675] from-[#b44593] ">
                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 class="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p class="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
