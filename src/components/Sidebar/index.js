import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss'

const SideBar = ({ sections, userPhoto, jobPhoto, userName }) => (
    <div className="side-bar">
        <div className="group-photo">
            <img className="user-photo" src={userPhoto} alt="user description"></img>
            <img className="job-photo" src={jobPhoto} alt="job description"></img>
            <p className="user-msg">
                Bem vindo, 
                <span>
                    {userName}
                </span>
            </p>
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
    userPhoto: state.user.userPhoto,
    jobPhoto: state.user.jobPhoto,
    userName: state.user.userName
});

export default connect(mapStateToProps)(SideBar)