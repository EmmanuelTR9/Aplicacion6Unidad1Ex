import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const EditUserForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues : props.currentUser});
    
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = data => {
        console.log(data);
        props.upDateUser(props.currentUser.id, data)

    }



    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ID:</label>
                <input type="text" name="id" 
                {...register("id", { required: true, maxLength: 100})}/>
                {errors.id?.type === 'required' && "Este es un Campo Requerido"}
                {errors.id?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Nombre:</label>
                <input type="text" name="nombre" 
                {...register("nombre", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Precio:</label>
                <input type="text" name="precio" 
                {...register("precio", { required: true, maxLength: 100})}/>
                {errors.precio?.type === 'required' && "Este es un Campo Requerido"}
                {errors.precio?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Descripcion:</label>
                <input type="text" name="descripcion" 
                {...register("descripcion", { required: true, maxLength: 100})}/>
                {errors.descripcion?.type === 'required' && "Este es un Campo Requerido"}
                {errors.descripcion?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Stock:</label>
                <input type="text" name="stock" 
                {...register("stock", { required: true, maxLength: 100})}/>
                {errors.stock?.type === 'required' && "Este es un Campo Requerido"}
                {errors.stock?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}


                
                <button>Editar Aceite</button>
            </form>
        </Fragment> 
     );
}
 
export default EditUserForm;