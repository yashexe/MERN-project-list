import { useState } from 'react';
import {Link} from 'react-router-dom'

const NavigationBar = ( { toggleNewProject } ) => {
    const [button,setButton] = useState('+')
    
    const toggleNewProjectForm = () => {
        toggleNewProject()
        setButton( button === '+' ? '\u2212':'+')
    }
    return (
        <header>
            <div className="header-container">
                <Link className="title" to="/">
                    <p className='website-title'>
                        &lt;ProjectLister/&gt;
                    </p>
                </Link>
                <Link className="nav">
                    <div className='new-project' onClick={toggleNewProjectForm}>
                        {button}
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default NavigationBar