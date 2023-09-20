//phần này sẽ ghi về kinh nghiệm làm việc
//chia 2 cột, cột 1 là tên công ty, cột 2 là các thông tin phụ

const Skills = () => {
        return <div className = 'container skills'>
            <div className='title'>
                <h1>Skills</h1>
            </div>

            <div className='row'>
                <div className='col-md-3'>
                    <i class='bx bxl-python' ></i>
                    <h4>Python</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-c-plus-plus' ></i>
                    <h4>C/C++</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-java' ></i>
                    <h4>Java</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-django' ></i>   
                    <h4>Django</h4>
                </div>
            </div>
    

            <div className='row'>
                <div className='col-md-3'>
                    <i class='bx bxl-html5' ></i>
                    <h4>HTML</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-css3' ></i>
                    <h4>CSS</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-javascript' ></i>
                    <h4>Javascript</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-bootstrap' ></i>
                    <h4>Bootstrap</h4>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-md-3'>
                    <i class='bx bxl-react' ></i>
                    <h4>ReactJS</h4>
                </div>
                <div className='col-md-3'>
                    <i class='bx bxl-mongodb' ></i>
                    <h4>MongoDB</h4>
                </div>
            </div>


        
        </div>
    };
    
export default Skills;