import React from 'react'

function BasketAndConditions() {
  return (
    <div>
         <div className='row'>
             <div className='col-25'>
               <label className='required' htmlFor="basketId">BASKET ID</label>
             </div>
             <div className='col-75'>
               <input type="text" id='basketId' name='basket_id' placeholder='Enter basket id..' required/>

             </div>

           </div>

           {/* Date */}
           <div className='row'>
             <div className='col-25'>
               <label className='required' htmlFor='dateLower'>DATE LOWER BOUND</label>
             </div>
             <div className='col-25'>
               <input type="date" id='dateLower' name='date_lower' placeholder='Enter date lower bound'/>


             </div>

             <div className='col-25'>
               <label className='required smallField' htmlFor='dateUpper'>DATE UPPER BOUND</label>
             </div>
             <div className='col-25'>
               <input type="date" id='dateUpper' name='date_upper' placeholder='Enter date upper bound'/>


             </div>


           </div>


           <div className='row'>
             <div className='col-25'>
               <label className='required' htmlFor='hourLower'>HOUR LOWER BOUND</label>
             </div>
             <div className='col-25'>
               <input type="number" id='hourLower' name='hour_lower' placeholder='Enter hour lower bound (00 to 23)' min="00" max="23" />


             </div>

             <div className='col-25'>
               <label className='required smallField' htmlFor='hourUpper'>HOUR UPPER BOUND</label>
             </div>
             <div className='col-25'>
               <input type="number" id='hourUpper' name='hour_upper' placeholder='Enter hour upper bound (00 to 23)' min="00" max="23"/>


             </div>


           </div>

           <div className='row'>
           <div className='col-25'>
               <label className='required' htmlFor='email'>EMAIL</label>
             </div>
             <div className='col-75'>
               <input type="email" id='email' name='email_' placeholder='Enter email..'/>
             </div>
           </div>


    </div>
  )
}

export default BasketAndConditions