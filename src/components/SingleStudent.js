import react, {useState,useEffect} from 'react';
import StudentService from '../services/StudentService';
import {useNavigate, useParams} from 'react-router-dom';


const SingleStudent= props =>{
    const {id}=useParams();

	const navigate = useNavigate();
    const initialStudentState={
        id:null,
        student_id:"",
        name:"",
        batch_number:"",
        obtain_mark:""
    }

    const [student, setStudent]= useState(initialStudentState);

    useEffect(()=>{
        singleStudent(id);
    },[]);

    const singleStudent=id=>{
        StudentService.getSingle(id).then(res=>{
            setStudent(res.data);
        })
    }

    const handelInputChange = event =>{
        const {name, value} =event.target;
        setStudent({...student,[name]:value});
    }

    const updateStudent= () =>{
        StudentService.update(student).then(response=>{
			navigate('/students');
        }).catch(e=>{
            console.log(e);
        });
    }

    return(
        <div className='form-group'>
            <h3 className='m-2 offset-3 text-success'>Update Student</h3>
            <div>
                <div className='form-group col-6 mt-2 offset-3'>
                <label className='text-success'><strong>Student ID:</strong></label>
                    <input type="text" className='form-control'
                        value={student.student_id}
                        onChange={handelInputChange}
                        name="student_id"
                        />
                </div>
                <div className='form-group col-6 mt-2 offset-3'>
                <label className='text-success'><strong>Student Name:</strong></label>
                    <input type="text" className='form-control'
                        value={student.name}
                        onChange={handelInputChange}
                        name="name"
                        />
                </div>
                <div className='form-group col-6 mt-2 offset-3'>
                <label className='text-success'><strong>Batch Number:</strong></label>
                    <input type="text" className='form-control'
                        value={student.batch_number}
                        onChange={handelInputChange}
                        name="batch_number"
                        />
                </div>
                <div className='form-group col-6 mt-2 offset-3'>
                <label className='text-success'><strong>Obtain Mark</strong></label>
                    <input type="text" className='form-control'
                        value={student.obtain_mark}
                        onChange={handelInputChange}
                        name="obtain_mark"
                        />
                </div>
                <button onClick={() => updateStudent()} className="btn btn-primary mt-2  offset-3">Update</button>
            </div>
        </div>
    );
};

export default SingleStudent;