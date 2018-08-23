import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
   
    this.state = {
        course: Object.assign({},this.props.course),
        errors:{}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    
  }

  saveCourse(event){
      event.preventDefault();
      this.props.actions.saveCourse(this.state.course);
      this.context.router.push("/courses");
  }

  updateCourseState(event) {
        const field = event.target.name;
        //let course = this.state.course;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
  }

  render() {
    return (
            <CourseForm 
            course = {this.state.course}
            errors = {this.state.errors}
            allAuthors = {this.props.authors}
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
             />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes ={
    router: PropTypes.object
}


function mapStateToProps(state, ownProps) {
 
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });


    let course = {id: '', watchHref:'', title: '', length: '', category: ''};
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);