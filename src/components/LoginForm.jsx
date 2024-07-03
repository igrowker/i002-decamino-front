
const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 shadow-md rounded-md bg-white">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Inicia sesión</h2>
        <p className="text-center mb-6 text-gray-600">Ingresa tus credenciales para comenzar</p>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Yourmail@mail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            id="robot-check"
            type="checkbox"
            className="mr-2 leading-tight"
          />
          <label className="text-gray-700 text-sm font-bold" htmlFor="robot-check">
            No soy un robot
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Iniciar sesión
          </button>
        </div>

        <p className="text-center mt-4">
          ¿Aún no tienes una cuenta? <a href="/Register" className="text-teal-500 hover:text-teal-700">Regístrate</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
