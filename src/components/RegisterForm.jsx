import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    notRobot: false,
    role: '',
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico válido.',
        icon: 'error',
      });
      return;
    }

    if (!validatePassword(formData.password)) {
      Swal.fire({
        title: 'Error',
        text: 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra, un número y un carácter especial.',
        icon: 'error',
      });
      return;
    }

    setLoading(true);

// eslint-disable-next-line no-unused-vars
    const { notRobot, ...submitData } = formData;

    try {
      const response = await axios.post('https://decamino-back.onrender.com/api/user/register', submitData);
      console.log(response.data);

      Swal.fire({
        title: '¡Registro exitoso!',
        text: 'Serás redirigido a la página principal.',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          navigate('/home');
        }
      });
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message === 'Usuario ya existe') {
        Swal.fire({
          title: 'Error',
          text: 'El usuario o correo electrónico ya está registrado.',
          icon: 'error',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Error al registrarse. Por favor, verifica los datos e intenta nuevamente.',
          icon: 'error',
        });
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 shadow-md rounded-md bg-white" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Regístrate</h2>
      <p className="text-gray-600 mb-6">Crea tu cuenta para empezar el viaje</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nombre de Usuario"
          value={formData.username}
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
          <option value="merchant">Comercio</option>
          <option value="traveler">Viajero</option>
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
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Registrarme'}
      </button>
      <p className="mt-6 text-center text-sm text-gray-600">
        ¿Ya tienes una cuenta? <a href="/login" className="text-teal-500 hover:text-teal-700">Inicia sesión</a>
      </p>
    </form>
  );
};

export default RegisterForm;
