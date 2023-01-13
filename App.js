import React from 'react';
import './App.css';

const options = [  { label: 'Option 1', value: 'option1' },  { label: 'Option 2', value: 'option2' },  { label: 'Option 3', value: 'option3' },];



const MyPage = () => {
    return (
      <div>

        {/* Header */}
          <div className='firstLine'>Call Tagger</div>

        {/* Login Information */}
          <div className='sublineHeader'>Login Information</div>

          <div className='flexMode loginInfo'>

            <div>
              Display Name :
            </div>
            <input className='getDisplayName' />
 
          </div>
          <div className='flexMode loginInfo'>

            <div>
              Windows ID :
            </div> 
            <input className='getWinId' />

          </div>

          <div className='flexMode  loginInfo'>
            
            <div>
              Station Number :
            </div>
            <input className='getStatNo' />

          </div>

        {/* Caller Information */}
          <div className='sublineHeader'>Caller Information</div>

          <div className='loginInfo'>

                <div className='flexMode disp'>
                    <div>Caller Number :</div>
                    <input className='getCallNumber' />                      
                </div>

                <div className='flexMode disp'>
                    <div>Query Type :</div>
                    <div className='getQueryType'>
                      {/* <label for="multiple-select">Select multiple options:</label> */}
                      <select id="multiple-select" name="multiple-select" multiple>
                        <option value="option1">Account / Website related query</option>
                        <option value="option2">AEI query</option>
                        <option value="option3">Blank / Dropped call</option>
                        <option value="option4">Complaint</option>
                        <option value="option5">Complaint follow up</option>
                        <option value="option5">Contribution file query</option>
                        <option value="option5">Deed of participation / UBOs query</option>
                        <option value="option5">DEWS Booster ( Voluntary Contribution ) query</option>
                        <option value="option5">DIFC / New Law query</option>
                        <option value="option5">Enrolmewnt / registration query </option>
                        <option value="option5">EOSB query</option>
                        <option value="option5">Genera query(AEi,ZWS,DIFC,New Law)</option>
                        <option value="option5">Investments / Switch</option>
                        <option value="option5">Payment related query</option>
                        <option value="option5">Trustee query</option>
                        <option value="option5">Website query / Issue</option>
                        <option value="option5">With drawal / Surrender query</option>
                      </select>
                    
                    </div>
                </div>

                <div className='flexMode disp'>
                    <div>Caller Type :</div>
                      <div className='getCallerType'>
                        <input type="checkbox" id="option1" value="option1"/>
                        <label for="option1">EE</label>

                        <input type="checkbox" id="option2" value="option2"/>
                        <label for="option2">ER</label>

                        <input type="checkbox" id="option3" value="option3"/>
                        <label for="option3">OWN</label>

                        <input type="checkbox" id="option4" value="option4"/>
                        <label for="option4">Others</label>
                      </div>
                </div>

                <div className='flexMode disp'>
                    <div>Company No :</div>
                    <input className='getCompanyNo' />
                </div>

                <div className='flexMode disp'>
                    <div>Notes :</div>
                    <input className='getNotes' />
                </div>
          </div> 

        {/* Buttons */}
        <div className='flexMode'>
          <button className='buttonSave'>Save</button>
          <button className='buttonClose'>Clear</button>
        </div>
          
      </div>
          
        
    )
}
export default MyPage;
