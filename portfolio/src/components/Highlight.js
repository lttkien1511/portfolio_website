const Highlight = () => {
    return <div className = 'container highlight'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='title'>
                <h1>Hi, I'm <span className='name'>Kien</span></h1>
                </div>
                <div className='sub-title'>
                    <h2>I am into Software Engineering!</h2>
                </div>
                <button data-bs-toggle='collapse' data-bs-target='#demo' className='btn btn-primary'>
                    About me!
                </button>
                <div id='demo' className='collapse'>
                    <h5>I want to become a software engineer to leverage my expertise in software engineering to contribute to innovative projects, 
collaborating with cross-functional teams and applying my strong problem-solving skills to 
deliver efficient and user-centric software solutions. </h5>
                </div>
            </div>
        </div>
    </div>
};

export default Highlight;