const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const payload = req.body;

    const allStudents = getAllStudents(payload);
  
    res.json({
      students: allStudents,
    });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body

    const student = addNewStudent(payload);

    return res.json({
       student,
    });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const payload = req.body

    const student = updateStudent(payload);
    return res.json({
       student,
    });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const student = getStudentDetail(id);
    return res.json({
       student,
    });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status, reviewerId } = req.body;
    const student = setStudentStatus({userId: id, reviewerId, status});
    return res.json({
       student,
    });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
