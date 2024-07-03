import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    notRobot: false,
    role: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 shadow-md rounded-md bg-white" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Regístrate</h2>
      <p className="text-gray-600 mb-6">Crea tu cuenta para empezar el viaje</p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Yourmail@mail.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="role">Rol</label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Comerciante">Comerciante</option>
          <option value="Viajero">Viajero</option>
        </select>
      </div>
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          name="notRobot"
          id="notRobot"
          checked={formData.notRobot}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          required
        />
        <label htmlFor="notRobot" className="ml-2 block text-sm text-gray-900">No soy un robot</label>
      </div>
      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Registrarme
      </button>
      <p className="mt-6 text-center text-sm text-gray-600">
        ¿Ya tienes una cuenta? <a href="/login" className="text-teal-500 hover:text-teal-700">Inicia sesión</a>
      </p>
    </form>
  );
};

export default RegisterForm;
