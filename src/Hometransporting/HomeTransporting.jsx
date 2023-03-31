import React from 'react';
import liquid from '../assets/liquid.png';
import packaging from './../assets/packaging.png';
import contract from './../assets/contract.png';
import specialized from './../assets/specialized.png'
import distribution from './../assets/distribution.png';
import TranspotType from './TranspotType';
import BaseButton from '../ui/basebutton/BaseButton';
import './index.css';

function HomeTransporting() {
  return (
    <div className='home_transporting'>
    <div className="home_transporting_content">
        <h3 className="home_transporting_header">Liquid Transportation</h3>
        <div className="home_transporting_method">
           <TranspotType
             image={liquid}
             type='Liquid Transportation'
             method='Premium Tankers'
             /> 
             <TranspotType
             image={packaging}
             type='Packaging Solutions'
             method='Warehouse Management'
             /> 
             <TranspotType
             image={contract}
             type='Contract Logistics'
             method='Road Transportation'
             /> 
             <TranspotType
             image={distribution}
             type='Warehouse & Distribution'
             method='Large Warehouse'
             /> 
             <TranspotType
             image={specialized}
             type='Specialized Transport'
             method='Ocean Transports'
             /> 
        </div>
        <BaseButton className='home_transporting_method_button'></BaseButton>
    </div>
      
    </div>
  )
}

export default HomeTransporting
