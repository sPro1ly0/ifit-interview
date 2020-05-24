import React from 'react';

function EquipmentSelection() {
    return (
        <div className='equipment-selection'>
            <h1 className='equipment-selection-title'>Interested in our exciting iFit-enabled equipment?</h1>
            <div className='equipment'>
                <div className='equipment-card'>
                    <img src={require('./images/treadmill.png')} alt='Woman working out on treadmill.' />
                    <h2 className='equipment-title'>Treadmills</h2>
                </div>
                <div className='equipment-card'>
                    <img src={require('./images/bikeperson.png')} alt='Man working out on stationary bike.' />
                    <h2 className='equipment-title'>Bikes</h2>
                </div>
                <div className='equipment-card'>
                    <img src={require('./images/ellipticalperson.png')} alt='Woman working out on eliptical.' />
                    <h2 className='equipment-title'>Ellipticals</h2>
                </div>
                <div className='equipment-card'>
                    <img src={require('./images/strengthperson.png')} alt='Man working out on weight machine.' />
                    <h2 className='equipment-title'>Strength</h2>
                </div>                
            </div>

        </div>
    );
}

export default EquipmentSelection;