//Header sẽ bao gồm ảnh chân dung,  
//các thông tin như linkedin, github sẽ hiển thị dưới dạng icon
//ghi objective ở dưới phần giới thiệu tên tuổi


const Header = () => {

    return <div className = 'container header'>
        <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
                <ul className = 'navbar-nav'>
                    <li className = 'nav-item'>
                        <a className="nav-link" href='#'>Home</a>
                    </li>
                    <li className='nav-item dropdown'>
                        <a className="nav-link dropdown-toggle" href='#' role='button' data-bs-toggle='dropdown'>About</a>
                        <ul class='dropdown-menu'>
                            <li className = 'nav-item'>
                                <a className="nav-link" href='#'>Education</a>
                            </li>
                            <li className = 'nav-item'>
                        <a className="nav-link" href='#'>Experience</a>
                            </li>
                            <li className = 'nav-item'>
                        <a className="nav-link" href='#'>Skills</a>
                            </li>
                        <li className = 'nav-item'>
                            <a className="nav-link" href='#'>Achievements and certifications</a>
                        </li>
                        <li className = 'nav-item'>
                            <a className="nav-link" href='#'>Papers and publications</a>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

}

export default Header;