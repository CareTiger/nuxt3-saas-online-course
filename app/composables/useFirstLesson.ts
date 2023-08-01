export default () => {
    const course = useCourse();
    return course.chapters[0].lessons[0];
};
