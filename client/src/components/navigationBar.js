import { useState } from 'react';
import {Link} from 'react-router-dom'

import NewProject from './newProject';

const NavigationBar = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [button,setButton] = useState('+')
    const togglePopup = () => {
        setPopupVisible(!popupVisible)
        setButton( popupVisible ? '+':'\u2212')
    }

    return (
        <header>
            <div className="header-container">
                <Link className="title" to="/">
                    <p className='website-title'>
                        &lt;ProjectLister /&gt;
                    </p>
                </Link>
                <Link className="nav">
                    <div className='new-project' onClick={togglePopup}>
                        {button}
                    </div>{popupVisible && (<NewProject/>)}
                </Link>
            </div>
        </header>
    )
}

export default NavigationBar