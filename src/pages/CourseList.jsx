import React from "react";
import axios from "axios";

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        axios.get("/api/course")
            .then(res => {
                this.setState({
                    courses: res.data
                });
                console.log(this.state.courses);
            })
            .catch(err => {
                console.log("aaaaa");
                console.log(err);
            });
    }

    render() {
        const columns = [];
        const column = [];
        let k = 0;
        for (let course of this.state.courses) {
            column.push(
                <div className="column is-half">
                    <div className="card">
                        <div className="card-content">
                            <h2 className="title is-4 grade">{course.code.toUpperCase()} {course.number}</h2>
                            <p className="subtitle">{course.topic}</p>
                            <p className="description">{course.description = ""}</p>
                            <p className="description">Hours: {course.hours}</p>
                            <p className="description">Prerequisite(s): {course.prerequisites}</p>
                            <p className="description">Antirequisite(s): {course.antirequisites}</p>
                            <p className="description">Corequisite(s): {course.corequisites}</p>
                        </div>
                    </div>
                </div>
            );
        
            if (k === 1) {
                columns.push(<div className="columns">
                    {/* Must clone column variable */}
                    { [].concat(column) }
                </div>);
                column.length = 0;
            }

            k = (k + 1) % 2;
        }
    
        return (
            <div className="container">
                {columns}
            </div>
        );
    }
}