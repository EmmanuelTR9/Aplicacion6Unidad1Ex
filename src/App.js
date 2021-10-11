import React, {useState} from 'react';
import UserTable from "./Componentes/UserTable";
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';

function App() {

  const userData = [
    {id: '1', nombre: 'Alto Kilometraje', precio: '$95', descripcion: 'Aceite para alto kilometraje', stock: '52'},
    {id: '2', nombre: 'Monogrado Gasolina', precio: '$90', descripcion: 'Aceite para alto kilometraje', stock: '15'},
    {id: '3', nombre: 'Monogrado Diesel', precio: '$69', descripcion: 'Aceite para alto kilometraje', stock: '100'},
    {id: '4', nombre: 'Anticongelante Ideal', precio: '$45', descripcion: 'Aceite para alto kilometraje', stock: '20'},
    {id: '5', nombre: 'Anticongelante Optima', precio: '$76', descripcion: 'Aceite para alto kilometraje', stock: '32'},
  ]

  const [users, setUsers] = useState(userData);

  //Agregar usuario
  const AddUser = (user) =>{
    user.id = user.id
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id != id))
  }

  //Bandera para Actualizar usuarios cambia entre add y edit
  const [bandera, setBandera] = useState(false);
  
  //Objeto datos para editar
  const [currentUser, setCurrentUser] = useState({
    id: '', name: '', username: ''
  });

  //Editar usuarios obtener datos para mostrar en formulario
  const editRow = (user) =>{
    setBandera(true);
    setCurrentUser({
      id: user.id, nombre: user.nombre, precio: user.precio, descripcion: user.descripcion, stock: user.stock
    })
  }

  //Funcion para Editar
  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <div className="container">
      <h1 class="d-flex justify-content-center"><span class="badge badge-secondary ">Aceites en existencia</span></h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            bandera ? (
              <div>
                <div class="alert alert-secondary" role="alert"><h2>Editar Aceite</h2></div>
                <EditUserForm currentUser={currentUser} upDateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <div class="alert alert-secondary" role="alert"><h2>Agregar Aceite</h2></div>
                <AddUserForm addUser={AddUser}/>
              </div>
            )
          }
        </div>
        
        <div className="flex-large">
        <div class="alert alert-secondary" role="alert"><h2>Vista de aceites</h2></div>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
