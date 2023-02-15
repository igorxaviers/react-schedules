import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import axios from 'axios'

export default function Home(){
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSchedules();
  }, []);

  const getSchedules = async () => {
    let { data } = await axios.get('http://localhost:3000/schedule');
    setSchedules(data);
  }

  const handleDetail = (id) => {
    navigate(`/schedule/${id}`);
  }

  return (
    <div className='col-md-9 mx-auto mt-4 px-md-0 px-3 mb-md-0'>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale={'pt-br'}
        height={700}
        events={schedules}
        eventClick={(info) => { handleDetail(info.event.id) }}
      />
    </div>
  )
}
