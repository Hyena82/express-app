const Course = require('../models/Course'); // Assuming you have a Course model defined

class CourseController {
  // [GET] /courses
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // [GET] /courses/:slug
  async show(req, res) {
    try {
      const course = await Course.findOne({ _id: req.params.slug });
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    }
    catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body
      const result = await Course.create(data);
      res.status(201).send(result);
    }
    catch (error) {
      // logic handle error
    }
  }

  async delete(req, res) {
    try {
      const result = await Course.findByIdAndDelete(req.params.id);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: 'Course not found'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Course deleted successfully',
        data: result
      });
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting course',
        error: error.message
      });
    }
  }

  async update(req, res) {
    try {
      const courseId = req.params.id;
      const data = req.body;
      const result = await Course.findByIdAndUpdate(courseId, data, { new: true });

      if (!result) {
        return res.status(404).json({
          success: false,
          message: 'Course not found'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Course updated successfully',
        data: result
      });
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating course',
        error: error.message
      });
    }
  }

}

module.exports = new CourseController();