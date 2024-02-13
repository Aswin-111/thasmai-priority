"use client"

import React from 'react'

function CheckoutPayment() {
  return (
    <div className='w-[100vw] h-[100vh] backdrop-blur-sm bg-[#0000003b] absolute top-0 left-0 flex justify-center items-center '>
        <div className='w-[600px] h-[500px] bg-white rounded'>
            <div className='w-full h-[15%] ps-8 font-semibold text-xl text-white bg-[#5799FD] rounded flex items-center'>
                Check-out Payment
            </div>
            <div className='w-full h-[85%] text-center'>
                <div className='w-[75%] mt-4 mx-auto'>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Number of days stayed</p>
                            <p>: uytr</p>
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Appointment payment</p>
                            {/* <p>: hjgfd</p> */}
                            <input 
                                className="h-[35px] rounded-[6px] outline-black" 
                                type="number" 
                                name="" 
                                placeholder='₹ 0000'
                            />
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Reward/Discount received</p>
                            <p>: ₹ 4000</p>
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%] font-semibold'>Total payment</p>
                            <p>: ₹ 5000</p>
                        </div>  
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Type of Payment</p>
                            {/* <p>: njhgfd</p> */}
                            <select className='w-[150px] h-[35px] p-0 ps-2 rounded-[6px] outline-black'  name="payment_method" active> Select
                                <option disabled>Select</option>
                                <option value="cash">Cash</option>
                                <option value="upi">UPI</option>
                                <option value="card">Card</option>
                            </select>
                        </div>     
                </div>


                <button className='mt-10 w-[50%] h-[50px] bg-[#23A058] text-white rounded-xl hover:bg-[#23a057d0]'>Pay ₹ 4000</button>

            </div>
        </div>
    </div>
  )
}

export default CheckoutPayment