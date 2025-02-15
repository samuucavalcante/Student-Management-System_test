const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { name, className, section, roll } = req.query;

    const payload = {
        name,
        className,
        section,
        roll
    };

    const allStudents = await getAllStudents(payload);

    res.json({
        students: allStudents,
    });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;

    const result = await addNewStudent(payload); 

    return res.json({
        message: result.message, 
    });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const { id: userId } = req.params;

    const result = await updateStudent({ ...payload, userId }); 

    return res.json({
        message: result.message, 
    });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const student = await getStudentDetail(id); 

    return res.json({
        student,
    });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status, reviewerId } = req.body;

    const result = await setStudentStatus({ userId: id, reviewerId, status }); // Adicionando await

    return res.json({
        message: result.message, // Retornando a mensagem de sucesso ou falha
    });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
