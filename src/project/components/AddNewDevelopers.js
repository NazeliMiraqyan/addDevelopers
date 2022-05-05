import { useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {addSkill} from '../redux/actions/action'

function AddNewDeveloper(){
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [data, setData] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurame] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();

    function addValue(val){
        setData(val)
        dispatch(addSkill(name,surname,age,data))
    }
    
    function onSubmit(data){
        console.log(data);
    }
   
    return(
        <>
        <form >
     
            <input {...register("firstName",{ required: true })} placeholder="First name" value={name} onChange={e => setName(e.target.value)} />
            {errors.firstName && <span style={{color:'red',fontWeight:'bold',display:"block"}}>This field is required</span>}

            <input {...register("lastName",{ required: true })} placeholder="Last name" value={surname} onChange={e => setSurame(e.target.value)}/>
            {errors.lastName && <span style={{color:'red',fontWeight:'bold',display:"block"}}>This field is required</span>}

            <input {...register("age",{ required: true })} type="number" placeholder="age" value={age} onChange={e => setAge(e.target.value)}/>
            {errors.age && <span style={{color:'red',fontWeight:'bold',display:"block"}}>This field is required </span>}

            <select {...register("category",{ required: true })} onChange={(e) => addValue(e.target.value)}>
                <option value={data}  >Select...</option>
                <option value='NodeJs' >Node Js</option>
                <option value='ReactJs'>React Js</option>
                <option value='angularJs'>Angular Js</option>
                <option value='VueJs'>Vue Js</option>
            </select>
            {errors.category && <span style={{color:'red',fontWeight:'bold',display:"block"}}>This field is required</span>}
            <button onClick={handleSubmit(onSubmit)}>save</button>
        </form>
        </>
    )
}
export default AddNewDeveloper