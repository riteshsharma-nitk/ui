import {useState} from 'react'

export default function BasketAndConditions() {

  const [dateType, setDateType] = useState("");
  const [formData, setFormData] = useState({
    basketID : "",
    date : "",
    hourLowerBound : "",
    hourUpperBound : "",
    dateLowerBound : "",
    dateUpperBound : ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name] : event.target.value })
  };

 const handleShowHide = (event) => {
    const getUser = event.target.value;
    setDateType(getUser) 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      basketID : "",
      date : "",
      hourLowerBound : "",
      hourUpperBound : "",
      dateLowerBound : "",
     dateUpperBound : ""
    });
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <div className='row'>
          <div className='col-25'>
            <label className='required' htmlFor="basketId">Basket Id</label>
          </div>
          <div className='col-75'>
            <input type="text" name='basket_id' placeholder='Enter basket id..' defaultValue={formData.basketID} onChange={handleChange}   required/>
          </div>
      </div>


    
    <div>
    <div className='row'>
      <div className='col-25'>
        <label className='required' htmlFor='dateType'>Date Type</label>
      </div>
      <div className='col-75'>
        <select id='dateType' value={dateType} onChange={e => (handleShowHide(e))}>
          <option value="noSelect">Select</option>
          <option value="single">For Single Date</option>
          <option value="multi">For Multiple Dates</option>
        </select>
       </div>
    </div> 

      { dateType === "single" && (

          <>
          <div className='row'>

              <div className='col-25'>
              <label className='required' htmlFor="date">Date</label>
              </div>

              <div className='col-75'>
              <input type="date" id='date' name='date' placeholder='Enter date..'
              defaultValue={formData.date}
              onChange={handleChange}
               required />
              </div>
          </div>
          

            <div className='row'>
              <div className='col-25'>
                <label className='required' htmlFor='hourLower'>Hour Lower Bound</label>
              </div>

              <div className='col-25'>
                <input type="number" id='hourLower' name='hour_lower' placeholder='Enter hour lower bound (00 to 23)' min="00" max="23" 
                  defaultValue={formData.hourLowerBound}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='col-25'>
                <label className='required smallField' htmlFor='hourUpper'>Hour Upper Bound</label>
              </div>

              <div className='col-25'>
                <input type="number" id='hourUpper' name='hour_upper' placeholder='Enter hour upper bound (00 to 23)' min="00" max="23"
                defaultValue={formData.hourUpperBound}
              onChange={handleChange}
              required
                 />
              </div>
            </div>
            
            </>
            )
            
          }
          </div>

      
      { dateType === "multi" && (
        
        <div className='row'>
             <div className='col-25'>
               <label className='required' htmlFor='dateLower'>Date Lower Bound</label>
             </div>

             <div className='col-25'>
               <input type="date" id='dateLower' name='date_lower' placeholder='Enter date lower bound'
                defaultValue={formData.dateLowerBound}
              onChange={handleChange}
              required
               />
             </div>

             <div className='col-25'>
               <label className='required smallField' htmlFor='dateUpper'>Date Upper Bound</label>
             </div>

             <div className='col-25'>
               <input type="date" id='dateUpper' name='date_upper' placeholder='Enter date upper bound'
                defaultValue={formData.dateUpperBound}
              onChange={handleChange}
              required
               />
             </div>

            </div>
          )
      }

      <br/>

      <div className='row'>
          <input type="submit" value="Submit"/>
      </div>
      </form>
      
    </div>
  )
}
