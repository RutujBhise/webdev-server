import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function findEnrollmentsForUser(userId) {
    return db.enrollments.filter((enrollment) => enrollment.user === userId);
  }
  function findUsersForCourse(courseId) {
    const { users, enrollments } = db;
    return users.filter((user) =>
      enrollments.some(
        (enrollment) =>
          enrollment.course === courseId && enrollment.user === user._id,
      ),
    );
  }
  function enrollUserInCourse(userId, courseId) {
    const existing = db.enrollments.find(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === courseId,
    );
    if (existing) return existing;
    const enrollment = { _id: uuidv4(), user: userId, course: courseId };
    db.enrollments.push(enrollment);
    return enrollment;
  }
  function unenrollUserFromCourse(userId, courseId) {
    db.enrollments = db.enrollments.filter(
      (enrollment) =>
        !(enrollment.user === userId && enrollment.course === courseId),
    );
  }
  return {
    findEnrollmentsForUser,
    findUsersForCourse,
    enrollUserInCourse,
    unenrollUserFromCourse,
  };
}
