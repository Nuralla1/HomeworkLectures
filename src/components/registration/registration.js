import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (info) => alert(JSON.stringify(info));

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  {...register("email", {
                    required: "This field is required",
                  })}
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {errors.email && errors.email.message}
              </div>
              <div>
                <label htmlFor="login" className="sr-only">
                  Login
                </label>
                <input
                  id="login"
                  {...register("login", {
                    required: "This field is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/,
                      message:
                        "must begin with a letter, consist of letters, numbers, periods and minus, but only end with letters or numbers; the minimum length of - one character, maximum - 20",
                    },
                  })}
                  type="text"
                  autoComplete="current-login"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Login"
                />
                {errors.login && errors.login.message}
              </div>
              <div></div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  {...register("password", {
                    validate: (value) =>
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g.test(
                        value
                      ) || (
                        <span>
                          Password must be more the 8 symbols, including
                          uppercase,lowercase character and number.
                        </span>
                      ),
                  })}
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {errors.password && errors.password.message}
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-z-а-я]+$/i,
                      message: "Name must include only letters and hyphen",
                    },
                  })}
                  type="text"
                  autoComplete="current-name"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
                {errors.name && errors.name.message}
              </div>
              <div>
                <label htmlFor="surname" className="sr-only">
                  Surname
                </label>
                <input
                  id="surname"
                  {...register("surname", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-z-]+$/i,
                      message: "Name must include only letters and hyphen",
                    },
                  })}
                  type="text"
                  autoComplete="current-surname"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Surname"
                />
                {errors.surname && errors.surname.message}
              </div>
              <div>
                <label htmlFor="telephone" className="sr-only">
                  Telephone
                </label>
                <input
                  id="telephone"
                  {...register("telephone", {
                    required: "Nado zapolnit",
                    pattern: { value: /^[0-9]{10}$/, message: "POPALSYA" },
                  })}
                  type="text"
                  autoComplete="current-telephone"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Telephone"
                />
                {errors.telephone && errors.telephone.message}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
