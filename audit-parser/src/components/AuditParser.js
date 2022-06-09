import React, {useState} from 'react'
import '../style/AuditParser.css';
import TriggerAndUpc from './TriggerAndUpc';
import BasketAndConditions from './BasketAndConditions';
import Upc from './Upc';
import BasketAndUpc from './BasketAndUpc';

function AuditParser() {
  const [showHide, setShowHide] = useState('');

  const handleShowHide = (event) => {
    const getUser = event.target.value;
    setShowHide(getUser) 
  };
  
  return (
    <div className='container'>
      <h1>Audit Parser</h1>
      <form className='form' id='AuditDetail'>
      <div className='row'>
        <select id='auditType' value={showHide} onChange={(e) => (handleShowHide(e))}>
          <option value="noSelection">--SELECT--</option>
          <option value="upc">UPC : get recent triggers based on upc</option>
          <option value="trigger">TRIGGER ID AND UPC : get recent audit based on trigger id and upc</option>
          <option value="basket">BASKET ID AND UPC : get recent audit based on basket id and upc</option>
          <option value="basketAndCondition">BASKET ID AND CONDITIONS : get recnet audit based on basket id and conditions</option>
        </select>
      </div>
      
      {
        showHide === "upc" && <Upc/>
      }

      {
        showHide === "trigger" && <TriggerAndUpc/>
      }

      {
        showHide === "basket" && <BasketAndUpc/>
      }

      {
        showHide === "basketAndCondition" && <BasketAndConditions/>
      }

     
           <br/>
          <div className='row'>
            <input type="submit" value="Submit"/>
          </div>

        </form>

     
    </div>
  )

}

export default AuditParser;
