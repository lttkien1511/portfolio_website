//phần này sẽ ghi các thông tin về học vấn
//Trường học

const Education = () => {
    return <div className = 'container education'>
        <div className='title'>
            <h1>Educational Background</h1>
        </div>
        <div className = 'row'>
            <div className = 'col-md-6'>
                <img src='./images/dhbkhn.jpg' alt='hust' width='500' height='400'/>
            </div>
            <div className = 'col-md-6'>
                <h5>
                    Hanoi University of Science and Technology
                </h5>
                <p>
                    From Sep 2019 - Aug 2023<br/>
                    Bachelor of Electronics and Telecommunication Engineering<br/>
                    Thesis: A method for text-based person search in Vietnamese language based on 
correlation filtering<br/>
                    Final average grade / GPA: Good
                </p>
                
            </div>
        </div>
    </div>
};

export default Education;