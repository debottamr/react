import React, {PropTypes} from 'react';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';


class CoursesPageReduxV2 extends React.Component {
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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
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

CoursesPageReduxV2.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
//meaning of below line
//const connecttedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
// export default connecttedStateAndProps(CoursesPage)
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps)(CoursesPageReduxV2);
