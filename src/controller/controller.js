const pool = require('../config/db');
const queries = require('../queries/queries')

//Get all students
const getStudents = (req,res)=>{
    pool.query(queries.getStudents,(error,result) => {
        if(error) throw error;
        res.status(200).json(result.rows);
    });
}

//Get routes by id
const getStudentById = (req,res) =>{
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById,[id],(error,result) => {
        const studentNotFound = !result.rows.length;
        if(studentNotFound){
            res.send("Student does not exist in the database");
        } else{
            if(error) throw error;
            res.status(200).json(result.rows);
        }
    });
}

//Create routes
const addStudent = (req,res) => {
    const {name,email,age,dob } = req.body;

    pool.query(queries.checkEmailExists,[email],(error,result) =>{
        if(result.rows.length){
            res.send("Email already exists.");
        }
    })

    pool.query(queries.addStudent, [name,email,age,dob],(error,result) => {
        if(error) throw error;
        res.status(201).send("Student Created Successfully.");
    })
}

//Update routes by id
const updateStudentById = (req,res) =>{
    const id = parseInt(req.params.id);
    const { name , email} = req.body;
    pool.query(queries.getStudentById,[id],(error,result) => {
        const studentNotFound = !result.rows.length;
        if(studentNotFound){
            res.send("Student does not exist in the database");
        }
    });

    pool.query(queries.updateStudentById,[name,email,id],(error,result) => {
        if(error) throw error;
        res.status(200).send("Student Updated Successfully.");
    });
}


//Delete routes by id
const deleteStudentById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error,result) => {
        const studentNotFound = !result.rows.length;
        if(studentNotFound){
            res.send("Student does not exist in the database");
        }
    });
    pool.query(queries.deleteStudentById,[id],(error,result) => {
        if(error) throw error;
        res.status(200).send("Student Deleted Successfully.");
    })
}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudentById,
    updateStudentById
}