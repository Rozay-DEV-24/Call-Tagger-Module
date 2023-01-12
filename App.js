import React from 'react';
import './App.css';

const MyPage = () => {
    return (
      <div>

        {/* Header */}
          <div className='firstLine'>Call Tagger</div>

        {/* Login Information */}
          <div className='sublineHeader'>Login Information</div>

          <div className='loginInfo'>
            <div className='disp'>
              Display Name :
            </div>
          </div>
          <div  className='loginInfo2'>
            <div className='disp'>
              Windows ID :
            </div>         
          
            <div className='disp'>Station Number :
            </div>
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
                    <input className='getQueryType' />
                </div>

                <div className='flexMode disp'>
                    <div>Caller Type :</div>
                    <input className='getCallerType' />
                </div>

                <div className='flexMode disp'>
                    <div>Company No :</div>
                    <input className='getInfo' />
                </div>

                <div className='flexMode disp'>
                    <div>Notes :</div>
                    <input className='getNotes' />
                </div>
          </div> 
      </div>
          
        
    )
}
export default MyPage;
