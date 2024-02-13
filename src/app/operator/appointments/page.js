"use client"

import React, { useState, useEffect } from 'react'
import NavLink from '../navlink/navlink'
// import dummyData from './dummy'
import AppointmentsTable from '@/app/components/operator/operatorTable'
import AppointmentView from '@/app/components/operator/appointmentView'
import CheckoutPayment from '@/app/components/operator/checkoutPayment'
import axios from 'axios';
import { useAppointmentStore } from './appointmentState'


function Appointments() {

  const appointmentState = useAppointmentStore((state) => {
    return state;
  });

  const [selectedId, setSelectedId] = useState(0);

  // console.log(appointmentState); 

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-all-appointment`);
          appointmentState.setAppointments(response.data);
          // console.log(response.data, appointmentState.appointments);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [appointmentState.selectedAppointmentId]);





 async function handleCheckIn() {


    console.log("handle Checkin", selectedId);
    console.log(appointmentState.appointmentStatus, "handle checkin");
    const fetchData = async () => {
      try {
          const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${selectedId}`, {
            appointment_status : appointmentState.appointmentStatus
          });

          return;
          
      } catch (error) {
        console.error('Error fetching data:', error);
        return;
      }
    };

    fetchData();
  }


  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-full h-[75%] mt-10 p-3 pt-5 bg-white rounded-[8px] shadow drop-shadow-md'>
          <AppointmentsTable setSelectedId={setSelectedId} handleCheckIn= {handleCheckIn}/>

          <div className='w-full h-[20%] pe-10 flex justify-end items-center'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div>
      </div>

      {
        appointmentState.viewAppointment && <AppointmentView selectedId={selectedId} />   
      }

      {/* <CheckoutPayment /> */}
    </div>

    



  )
}

export default Appointments