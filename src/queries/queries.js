const getStudents = 'SELECT * FROM students ORDER BY id ASC';
const getStudentById = 'SELECT * FROM students WHERE id = $1';
const checkEmailExists = 'SELECT * FROM students s WHERE s.email = $1';
const addStudent = "INSERT INTO students ( name, email, age, dob) VALUES ($1,$2,$3,$4)";
const updateStudentById = 'UPDATE students SET name = $1,email =$2 WHERE id = $3 '
const deleteStudentById = 'DELETE FROM students WHERE id = $1';

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    deleteStudentById,
    updateStudentById
}