import {Link} from 'react-router-dom'

const navigationBar = () => {
    
    return (
        <header>
            <div className="header-container">
                <Link className="title" to="/">
                    <p className='website-title'>
                        &lt;ProjectLister/&gt;
                    </p>
                </Link>
                <Link className="nav" to="/">
                    <div className='new-project'>
                        +
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default navigationBar