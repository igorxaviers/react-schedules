import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { formatDate, formatCPF } from "../utils/Util"
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
        <div className='col-md-5 mx-auto mt-5 px-md-0 px-3 mb-md-0'>
            <h2 className='text-center fw-semibold fs-2 mb-5'>{schedule.description}</h2>
            <p>{schedule.name}</p>
            <p>{schedule.email}</p>
            <p>{formatCPF(schedule?.cpf)}</p>
            {/* <p>{schedule.cpf}</p> */}
            <p>{formatDate(schedule.date)}</p>
            <p>{schedule.time}</p>
            <p>{schedule.description}</p>

            <div className="d-flex mt-5">
                {!schedule.finished ? 
                    <button className='btn btn-dark px-4 py-2' onClick={finishSchedule}>Finalizar consulta</button>
                    :
                    <button className='btn btn-dark px-4 py-2' disabled>Consulta finalizada</button>
                }
                {/* <p>informação id do detalhe {id}</p> */}
                <button className='btn btn-light px-4 ms-5' onClick={() => navigate(-1)}>Voltar</button>

            </div>
        </div>
    )
}