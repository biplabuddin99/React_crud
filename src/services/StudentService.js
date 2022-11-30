import http from "../http-common";
const create = data=>{
    return http.post('create.php',data);
}

const getAll = () =>{
    return http.get('retrive.php');
}

const destroy = id=>{
    return http.post('delete.php',id);
}

const getSingle = id=>{
    return http.post('retrive_single.php',id);
}

const update = data=>{
    return http.post('update.php',data);
}

const StudentService = {
    create,getAll,destroy,getSingle,update
}

export default StudentService;