import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';

export default function Schedule(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const newSchedule = {
    name,
    email,
    cpf,
    description,
    date,
    time
  }

  const createSchedule = async() => {
    console.log(newSchedule);
    try{
      let res = await axios.post('http://localhost:3000/schedule', newSchedule);
      if(res.data.error){
        toast.error(res.data.message);
        return;
      }
      else{
        toast.success(res.data.message);
        setName('');
        setEmail('');
        setCPF('');
        setDescription('');
        setDate('');
        setTime('');
        navigate('/');
      }
    } catch(err){
      toast.error(err.response.data.message);
    }
  }


  return (
    <div className='col-md-5 mx-auto mt-5 px-md-0 px-3 mb-md-0'>
        <h2 className='mb-5'>new schedule</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="name">Email</label>
          <input type="email" className="form-control" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="name">CPF</label>
          <input type="text" className="form-control" placeholder="CPF document" value={cpf} onChange={(e) => setCPF(e.target.value)} maxLength="11"/>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="name">Description</label>
          <textarea type="text" className="form-control" placeholder="Describe your schedule" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className='row'>
          <div className="form-group mt-3 col-md-6 col-12">
            <label htmlFor="name">Date</label>
            <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)}/>
          </div>

          <div className="form-group mt-3 col-md-6 col-12">
            <label htmlFor="name">Time</label>
            <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)}/>
          </div>
        </div>

        <button onClick={createSchedule} className="btn btn-primary mt-5 d-block ms-auto me-0 px-5 py-2">Schedule</button>

    </div>
  )
}
