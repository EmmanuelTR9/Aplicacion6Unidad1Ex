import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        props.addUser(data);
    }

    return (
        <Fragment>            

            <form onSubmit={handleSubmit(onSubmit)}>
                <label >ID:</label>
                <input type="text" name="id"
                {...register("id", { required: true, maxLength: 2})}/>
                {errors.id?.type === 'required' && "Este es un Campo Requerido"}
                {errors.id?.type === 'maxLength' && "El Maximo de Caracteres es de 2"}

                <label>Nombre:</label>
                <input type="text" name="nombre"
                {...register("nombre", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Precio:</label>
                <input type="text" name="precio"
                {...register("precio", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Descripcion:</label>
                <input type="text" name="descripcion"
                {...register("descripcion", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                
                <label>Stock:</label>
                <input type="text" name="stock"
                {...register("stock", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                
                <button>Agregar Nuevo Aceite</button>
            </form>
        
        </Fragment> 
     );
}
 
export default AddUserForm;