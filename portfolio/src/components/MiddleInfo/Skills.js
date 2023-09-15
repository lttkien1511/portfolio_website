//phần này sẽ ghi về kinh nghiệm làm việc
//chia 2 cột, cột 1 là tên công ty, cột 2 là các thông tin phụ

const Skills = () => {
        return <div className = 'container skills'>
            <div className='title'>
                <h1>Skills</h1>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <h5>Programming language</h5>
                </div>
                <div className='col-md-2'>
                    <img src='./images/python-logo-only.png' alt='python' height='120' width='120'/>
                </div>
                <div className='col-md-2'>
                    <img src='./images/c-.png' alt='C' height='120' width='120'/>
                </div>
                <div className='col-md-2'>
                    <img src='./images/java.png' alt='Java' height='120' width='120'/>
                </div>
            </div>
            <br/>

            <div className='row'>
                <div className='col-md-6'>
                    <h5>Framework</h5>
                </div>
                <div className='col-md-2'>
                    <img src='./images/django-icon.jpg' alt='Django' height='120' width='120'/>
                </div>
            </div>
            <br/>

            <div className='row'>
                <div className='col-md-6'>
                    <h5>Databases</h5>
                </div>
                <div className='col-md-3'>
                    <img src='./images/logo-mysql.png' alt='MySQL' height='120' width='200'/>
                </div>
                <div className='col-md-3'>
                    <img src='./images/MongoDB_ForestGreen.png' alt='MongoDB' height='80' width='320'/>
                </div>
            </div>
            <br/>

            <div className='row'>
                <div className='col-md-6'>
                    <h5>Operating System</h5>
                    </div>
                <div className='col-md-3'>
                    <img src='./images/Linux.png' alt='Linux' height='120' width='120'/>
                </div>
            </div>
            <br/>

        
        </div>
    };
    
export default Skills;