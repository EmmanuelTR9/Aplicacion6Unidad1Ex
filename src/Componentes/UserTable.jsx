import React, {Fragment} from 'react';

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <Fragment>
            <table class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Stock</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.precio}</td>
                            <td>{user.descripcion}</td>
                            <td>{user.stock}</td>
                            <td>
                                <button className="button muted-button btn btn-primary text-light"
                                onClick={() => {props.editRow(user)}}>Editar Aceite</button> 
                                <button className="button muted-button text-light"
                                onClick={() => {props.deleteUser(user.id)}}>Borrar Aceite</button>
                            </td>
                        </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan={3}>No hay aceites registrados</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        </Fragment>
             );
}
 
export default UserTable;

