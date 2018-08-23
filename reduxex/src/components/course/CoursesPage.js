import React, {PropTypes} from 'react';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
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
    this.props.actions.createCourse(this.state.course);
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

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
    //createCourse: bindActionCreators(courseActions.createCourse, dispatch) //This only maps a single action but we want to apply to all actions
  };
}
//meaning of below line
//const connecttedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
// export default connecttedStateAndProps(CoursesPage)
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
