import react, {useState} from 'react';
import StudentService from '../services/StudentService';
import {useNavigate} from 'react-router-dom';


const AddStudent=()=>{
	const navigate = useNavigate();
    const [student, setStudent]= useState();

    const handelInputChange = event =>{
        const {name, value} =event.target;
        setStudent({...student,[name]:value});
    }
    const saveStudent= () =>{
        StudentService.create(student).then(response=>{
			navigate('/students');
        }).catch(e=>{
            console.log(e);
        });
    }

    return(
        <div className='form-group'>
            <h3 className='m-2 offset-3 text-success'>Create Student</h3>
            <div>
                <div className='form-group col-6 mt-2 offset-3'>
                    <label className='text-success'><strong>Student ID:</strong></label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="student_id"
                        />
                </div>
                <div className='form-group col-6 mt-2 offset-3'>
                    <label className='text-success'><strong>Student Name:</strong></label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="name"
                        />
                </div>
                <div className='form-group col-6 mt-2 offset-3'>
                    <label className='text-success'><strong>Batch Number:</strong></label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="batch_number"
                        />
                </div>
                <div className='form-group col-6 mt-2 offset-3'>
                    <label className='text-success'><strong>Obtain Mark</strong></label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="obtain_mark"
                        />
                </div>
                <button onClick={() => saveStudent()} className="btn btn-primary mt-2 offset-3">Save</button>
            </div>
        </div>
    );
};

export default AddStudent;