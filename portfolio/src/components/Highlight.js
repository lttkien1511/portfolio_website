const Highlight = () => {
    return <div className = 'container highlight'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='title'>
                <h1>Hi, I'm <span className='name'>Kien</span></h1>
                </div>
                <div className='sub-title'>
                    <h2>I am <span className='animated-text' >into Software Engineering</span></h2>
                </div>
                <div className='aboutme'>
                <p>I want to become a software engineer to leverage my expertise in software engineering to contribute to innovative projects, 
collaborating with cross-functional teams and applying my strong problem-solving skills to 
deliver efficient and user-centric software solutions. </p>
                </div>
                <div className='social-media'>
                    <a href='www.linkedin.com/in/tri-trung-kien-le-411b41289'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href='#'>
                        <i className='bx bxl-github' ></i>   
                    </a>
                    <a href='#'>
                        <i className='bx bx-envelope' ></i>
                    </a>
                    <a href='#'>
                        <i className='bx bxs-phone' ></i>                    
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default Highlight;