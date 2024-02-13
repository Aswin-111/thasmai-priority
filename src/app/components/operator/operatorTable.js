"use client"


import React, { useRef } from "react";
import { useAppointmentStore } from "@/app/operator/appointments/appointmentState";





function AppointmentsTable({ setSelectedId, handleCheckIn }) {

  const appointmentState = useAppointmentStore((state) => {
    return state;
  });
   
  // const appointments = appointmentState.appointments;

  const statusRef = useRef(null);
   


  return (
    <div className="overflow-scroll h-[80%] px-3 ">
      <table className="table rounded-3xl">
        <thead
          className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center">Id</th>
            <th className="text-center">Date</th>
            <th className="text-center">Username</th>
            <th className="text-center">Check In</th>
            <th className="text-center">Check Out</th>
            <th className="text-center">Status</th>
            <th className="text-center">Details</th>
           
          </tr>
        </thead>
        <tbody className="my-10">
          {
           appointmentState.appointments.map((appointment, index) => {

            const appointment_id = appointment.id
            return (
              <tr
                key={index}
                className="font-semibold text-[0.8rem] text-black my-10 "
              > 
                
                <td className="text-center">{appointment.UId} </td>
                <td className="text-center">{appointment.register_date} </td>
                <td className="text-center text-indigo-600">{appointment.user_name} </td>
                <td className="text-center">{appointment.appointmentDate}</td>
                <td className="text-center">{appointment.checkOutDate} </td>
                <td className="text-center flex justify-center">
                  
                  <div className={ appointment.appointment_status === "Pending" && "w-[120px] h-[35px] m-0 ps-3 text-white font-light rounded-[8px] flex justify-between items-center bg-amber-500"
                                || appointment.appointment_status === "Check In" && "w-[120px] h-[35px] m-0 ps-3 text-white font-light rounded-[8px] flex justify-between items-center bg-[#23A058]"
                                || appointment.appointment_status === "Check Out" && "w-[120px] h-[35px] m-0 ps-3 text-white font-light rounded-[8px] flex justify-between items-center bg-[#CB4335]"
                                || appointment.appointment_status === "Completed" && "w-[120px] h-[35px] m-0 text-black font-light border-black border-[1px] rounded-[8px] flex justify-center items-center bg-white"
                  }>
                    
                    <p>{appointment.appointment_status}</p>


                    {
                      appointment.appointment_status !== "Completed" &&

                      <select 
                        className="w-[10px] h-[35px] m-0 p-0 text-white border-none outline-none bg-transparent placeholder:text-white"
                        name="appointment_status"
                        ref={statusRef}
                        onChange={(e) => {
                              const val = statusRef.current.value;
                              if(val === "Pending") {
                                return;
                              } 
                              appointmentState.setAppointmentStatus(val); 
                              console.log(statusRef);
                              
                              // setSelectedAppointmentId(appointment_id);
                              // appointmentState.setSelectedAppointmentId(appointment_id);
                              
                           
                          }
                        
                        }
                    
                      >
                    
                        <option className="bg-white text-slate-500" value="Pending" defaultValue="Pending">---Select---</option>
                        {/* <option value="Pending" disabled>Pending</option> */}
                        { 
                          appointment.appointment_status === "Pending" &&
                          <option 
                            className="bg-white text-black w-[200px]" 
                            value="Check In"
                            onClick={() => {
                              setSelectedId(appointment.id);
                              handleCheckIn();
                            }}
                          >
                            Check In
                          </option>
                        }

                        {
                          appointment.appointment_status === "Check In" &&
                          <option className="bg-white text-black" value="Check Out">
                            Check Out
                          </option>
                        }
                        
                    
                      </select>

                    }

                    

                  </div>

                  
                  

                </td>
                <td className="text-center">
                  <button 
                    className='w-[90px] h-[35px] rounded-3xl border-black border-[0.5px] hover:bg-slate-200'
                    onClick={ () => {
                      appointmentState.setViewAppointment(true);
                      // appointmentState.setSelectedAppointmentId(appointment.id);
                      setSelectedId(appointment.id);
                    } }
                  >
                    View
                  </button>                
                </td>



                            
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;
