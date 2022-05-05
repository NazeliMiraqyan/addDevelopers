import { useDispatch, useSelector } from "react-redux"
import { remove } from "../redux/actions/action";


function AllDevelopers(){
    const selector = useSelector(state=>state.data)
    const dispatch = useDispatch()
    return(
        <table className="table table-striped w-50">
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Age</th>
                <th scope="col">Skills</th>
                <th scope="col">Clear</th>
            </tr>
        </thead>
        <tbody>
                {selector.arr.map((el,i)=>{
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{el.name}</td>
                            <td>{el.surname}</td>
                            <td>{el.age}</td>
                            <td>{el.data}</td>
                            <td><button onClick={()=>dispatch(remove(el))}>Delete</button></td>
                        </tr>
                    )
                })}
                
           
            
        </tbody>
    </table>


    )
}
export default AllDevelopers