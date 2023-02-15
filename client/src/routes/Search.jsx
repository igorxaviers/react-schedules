import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Search(){
    const [search, setSearch] = useState('');
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        handleSearch();
    }, []);

    useEffect(() => {
        if(search.length < 3 && search!=='') return;
        const delayDebounceFn = setTimeout(() => {
            handleSearch();
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [search]);

    const handleSearch = async () => {
        try{
            let { data } = await axios.get(`http://localhost:3000/schedulesearch?search=${search}`);
            setSchedules(data);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className='col-md-5 mx-auto mt-5 px-md-0 px-3 mb-md-0'>

            <h2 className="mb-3 fw-semibold">Search schedules</h2>

            <div className="d-flex mb-5">
                <input className="form-control" type="search" placeholder="CPF or e-mail" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-dark px-5 ms-3" onClick={handleSearch}>Search</button>
            </div>

            <div className="mt-5">
                {
                    schedules.map((schedule, index) => {
                        return(
                            <div key={index}>
                                <h3 className='mt-3 fs-5 fw-semibold'>{schedule.description}</h3>

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
        </div>
    )
}