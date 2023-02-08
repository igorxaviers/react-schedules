import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Search(){
    const [search, setSearch] = useState('');
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        index();
    },[]);

    const index = async () => {
        try{
            let { data } = await axios.get(`http://localhost:3000/schedule?finisheds=true`);
            console.log(data);
            setSchedules(data);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSearch = async () => {
        try{
            let { data } = await axios.get(`http://localhost:3000/schedule/search/search=${search}`);
            console.log(data);
            setSchedules(data);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <h1 className="mb-5">Search</h1>

            <div className="d-flex ">
                <input className="form-control" type="search" placeholder="CPF or e-mail" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-dark px-5 ms-3">Search</button>
            </div>

            <div className="mt-5">
                {
                    schedules.map(schedule => {
                        return(
                            <div>
                                <h3>{schedule.description}</h3>

                                <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                                    <div>
                                        <p>{schedule.name}</p>
                                        <p>{schedule.email}</p>
                                    </div>
                                    <div>
                                        <p>{schedule.finished ? 'Finished' : 'Not finished'}</p>
                                        <p>{schedule?.cpf}</p>
                                    </div>
                                    <div>
                                        <h5>{schedule.date}</h5>
                                        <p>{schedule.time}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>



    )

}