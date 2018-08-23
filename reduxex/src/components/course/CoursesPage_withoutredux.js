import React, {PropTypes} from 'react';

class CoursesPageWithoutRedux extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
       course:{title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.state({course: course});

  }

  onClickSave(){
    alert(`Saving ${this.state.course.title}`);
  }
  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
	<h2>Add Course</h2>
        <input type="text"
               value={this.state.course.title}
               onChange={this.onTitleChange} />
	<input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPageWithoutRedux.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default CoursesPageWithoutRedux;
