import {Link} from 'react-router-dom'

const navigationBar = () => {
    
    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <p className='website-title'>Project Lister</p>
                </Link>
            </div>
        </header>
    )
}

export default navigationBar