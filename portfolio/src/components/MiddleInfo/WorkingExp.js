//phần này sẽ ghi về kinh nghiệm làm việc
//chia 2 cột, cột 1 là tên công ty, cột 2 là các thông tin phụ

const WorkingExp = () => {
/*    return <div className="container WorkingExp">
        <div className="row">
            <div className="col">
                NGSI.,JSC
            </div>
            <div className="col">
                From June 2021 - Present
                INTERNSHIP
                <ul>
                    <li>Have a first sight in Linux OS and interact with files and folders, which helps me to 
understand the open-source environment, resource management and know how to 
operates various platforms. </li>
                    <li>Learning Python and study to program backend (Django Framework), which helped 
me initially approach the flexible programming language. This is the first step to 
program and apply in many different fields in the future.</li>
                    <li>Participating in the real-time project of the company in crawling data from an E-commerce website. This project plays an important part for me in the ability to learn 
the necessary technologies and skills as well as the steps of implementing a real 
project, and how to crawl data from any website.</li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col">
                Computer Vision Lab - Hanoi University of Science and Technology, Vietnam
            </div>
            <div className="col">
                From Sep 2022 - Aug 2023
                STUDENT RESEARCHER
                <ul>
                    <li>Participate in researching, evaluating, and improving the accuracy in text-based 
person search. These works give me a lot of chances in thinking and brainstorming 
skill of applying deep learning as well as computer vision in reality.</li>
                    <li>Read science articles related to the computer vision, natural language processing 
and summarize the related methods. This helps me to catch up with a lot of state-of-the-art methods and integrate it to the real-time product. </li>
                    <li>Participate in writing a science paper in improving the ability of text-based person 
search in Vietnamese language. This improves the ability of logic and critical thinking 
as well as the concise writing skill in writing a short report during the work process in 
the future. </li>
                </ul>            
            </div>
        </div>
    </div>
*/

    return <div className = 'container workingexp'>
        <div className='title'>
            <h1>Working Experiences</h1>
        </div>
        
        <div className='row'>
            <div className='col-md-6'>
                <img src='./images/NGSI.jpg' alt='NGSI' width='300' height='300' />
            </div>
            <div className='col-md-6'>
                <h5>NGSI., JSC</h5>
                <p>
                    From June 2021 - Present <br/>
                    INTERNSHIP
                </p>
                <ul>
                    <li>Have a first sight in Linux OS</li>
                    <li>Learning Python and backend framework</li>
                    <li>Join in real-time project - Crawling data from an E-commerce website</li>
                </ul>
            </div>
        </div>
        <br/>

        <div className='row'>
            <div className='col-md-6'>
                <img src='./images/Logo-mica-transp.jpg' alt='MICA' width='300' height='300' />
            </div>
            <div className='col-md-6'>
                <h5>Computer Vision Lab</h5>
                <h5>Hanoi University of Science and Technology, Vietnam</h5>
                <p>
                    From Sep 2022 - Aug 2023 <br/>
                    STUDENT RESEARCHER
                </p>
                <ul>
                    <li>Participate in researching, evaluating, and improving the accuracy in text-based-person search</li>
                    <li>Read science articles related to the computer vision, natural language processing and summarize the related methods</li>
                    <li>Participate in writing a science paper in improving the ability of text-based person search in Vietnamese language </li>
                </ul>
            </div>
        </div>
        
    </div>
};

export default WorkingExp;