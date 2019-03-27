import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss';
import sair from '../../assets/delete.png';

const SideBar = ({ sections, userPhoto, jobPhoto, userName }) => (
    <div className="side-bar">
        <div className="group-photo">
            <img className="user-photo" src={userPhoto} alt="user description"></img>
            <img className="job-photo" src={jobPhoto} alt="job description"></img>
            <p className="user-msg">
                Bem vindo, <span>{" " + userName}</span>
            </p>
        </div>
        <ul className="menu">
            {sections.map(section => (
                <li>
                    {section.path
                        ? <Link className="menu-action" to={section.path}>
                            <img className="menu-logo" alt="logo definition" src={section.icon}></img>
                            <span className="menu-text">{section.name}</span>
                        </Link>
                        : <span>
                            <span className="menu-action">
                                <img className="menu-logo" alt="logo definition" src={section.icon}></img>
                                <span className="menu-text">{section.name}</span>
                            </span>
                            <ul className="sub-menu">
                                {section.subpath.map(sub => (
                                    <li className="sub-menu-item">{sub.name}</li>
                                ))}
                            </ul>
                        </span>
                    }
                </li>
            ))}
        </ul>
        <div className="menu menu-exit">
            <Link className="menu-action" to="/">
                <img className="menu-logo" alt="logo definition" src={sair}></img>
                <span className="menu-text">Deslogar</span>
            </Link>

        </div>
    </div>
);

const mapStateToProps = state => ({
    sections: state.sidebar.sections,
    userPhoto: state.user.userPhoto,
    jobPhoto: state.user.jobPhoto,
    userName: state.user.userName
});

export default connect(mapStateToProps)(SideBar)