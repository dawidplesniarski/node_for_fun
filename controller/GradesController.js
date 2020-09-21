const Grades = require('../models/Grades');
const Subject = require('../models/Subject');

const GradesController = {
    findAll: async (req, res) => {
        try {
            const grades = await Grades.find().populate('subject');
            res.json(grades);
        } catch (err) {
            res.json({message: err})
        }
    },
    findByAlbum: async (req, res) => {
        try {
            const studentGrades = await Grades.find({studentAlbum: req.params.studentAlbum}).populate('subject');
            res.json(studentGrades);
        } catch (err) {
            res.json({message: err})
        }
    },
    addGrade: async (req, res) => {
        const grade = new Grades({
            studentAlbum: req.body.studentAlbum,
            grade: req.body.grade,
            subject: req.body.subject
        });

        try {
            const savedGrade = await grade.save();
            res.json(savedGrade);
        } catch (err) {
            res.json({message: err});
        }
    },
    findLatest: async (req, res) => {
        try {
            const latestGrade = await Grades.findOne({studentAlbum: req.params.studentAlbum}, {}, {sort: {'date': -1}});
            res.json(latestGrade);
        } catch (err) {
            res.json(err);
        }
    },
    addTestGrade: async (req, res) => {
        const subjectId = await Subject.findOne({subjectName: {$regex: new RegExp(req.params.subject, "i")}}).select('_id');
        const grade = new Grades({
            studentAlbum: req.body.studentAlbum,
            grade: req.body.grade,
            subject: subjectId
        });
        try {
            const savedGrade = await grade.save();
            res.status(201).send(savedGrade);
        } catch (err) {
            res.status(404).send({message: err});
        }
    }
}
module.exports = GradesController;