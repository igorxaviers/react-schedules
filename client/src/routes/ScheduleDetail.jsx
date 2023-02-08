import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import axios from "axios";

export default function ScheduleDetail(){
    const [schedule, setSchedule] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSchedule();
    }, []);

    const getSchedule = async () =>{
        try{
            let { data } = await axios.get(`http://localhost:3000/schedule/${id}`);
            setSchedule(data);
            console.log(data);
        }
        catch(err){
            toast.error(err.response.data.message);
            console.log(err);
        }
    }

    const finishSchedule = async () => {
        try{
            let { data } = await axios.post(`http://localhost:3000/schedule/finish`, { id: schedule._id });
            setSchedule(data.schedule);
            toast.success(data.message);
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <h1 className='text-center'>{schedule.description}</h1>
            <p>{schedule.name}</p>
            <p>{schedule.email}</p>
            <p>{schedule.cpf}</p>
            <p>{schedule.date}</p>
            <p>{schedule.time}</p>
            <p>{schedule.description}</p>

            {!schedule.finished ? 
                <button className='btn btn-dark' onClick={finishSchedule}>Finalizar consulta</button>
                :
                <button className='btn btn-dark' disabled>Consulta finalizada</button>
            }
            {/* <p>informação id do detalhe {id}</p> */}
            {/* <button onClick={() => navigate('/schedule')}>Voltar</button> */}
        </>
    )
}