import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css'

const SideBar = ({ sections, userPhoto, jobPhoto }) => (
    <div className="side-bar">
        <div className="group-photo">
            <img className="user-photo" src={userPhoto} alt="user description"></img>
            <img className="job-photo" src={jobPhoto} alt="job description"></img>
        </div>
        <ul>
            {sections.map(section => (
                <li>
                    {section.path
                        ? <Link to={section.path}>{section.name}</Link>
                        : <span>
                            {section.name}
                            <ul>
                                {section.subpath.map(sub => (
                                    <li>{sub.name}</li>
                                ))}
                            </ul>
                        </span>
                    }
                </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    sections: state.sidebar.sections,
    userPhoto: state.sidebar.userPhoto,
    jobPhoto: state.sidebar.jobPhoto
});

export default connect(mapStateToProps)(SideBar)