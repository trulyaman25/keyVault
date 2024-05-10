import './revampedDashboardStyles.css'
import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardNavbar from './dashboardComponents/dashboardNavbar/dashboardNavbar'
import Notes from './dashboardComponents/notes/notes'
import AddIcon from '../../assets/icons/md_addIcon.svg'

function RevampedDashboard () {
    const [website, setWebsite] = useState('');
    const [websiteType, setWebsiteType] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const [savedEntries, setSavedEntries] = useState([]);
    
    const { isAuthenticated, user } = useAuth0();
    
    const [panelActive, setPanelActive] = useState(false);

    const toggleActivePanel = () => {
        setPanelActive((prevValue) => !prevValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/passwords?userId=${user.sub}`);
                const passwords = response.data;
                if (Array.isArray(passwords)) {
                    setSavedEntries(passwords);
                } else {
                    console.error('Error: Response data is not an array');
                }
            } catch (error) {
                console.error('Error fetching passwords:', error);
            }
        };

        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated, user.sub]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted');
        const ciphertext = CryptoJS.AES.encrypt(password, 'asdfghjkl').toString();
        const newEntry = {
            userId: user.sub,
            website: website,
            websiteType: websiteType,
            email: email,
            username: username,
            password: ciphertext,
            comment: comment,
        };
        try {
            const response = await axios.post('http://localhost:5000/api/passwords', newEntry);
            const savedEntry = Array.isArray(response.data) ? response.data : [response.data];
            setSavedEntries([...savedEntries, ...savedEntry]);
            setWebsite('');
            setWebsiteType('');
            setUsername('');
            setEmail('');
            setPassword('');
            setComment('');
        } catch (error) {
            console.error('Error saving password:', error);
        }
    };

    const handleEntryClick = (index) => {
        const updatedEntries = [...savedEntries];
        updatedEntries[index].expanded = !updatedEntries[index].expanded;
        setSavedEntries(updatedEntries);
    };

    const copyToClipboard = (password, index) => {
        const bytes = CryptoJS.AES.decrypt(password, 'asdfghjkl');
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

        navigator.clipboard.writeText(decryptedPassword)
            .then(() => {
                alert('Password copied to clipboard!');
                const updatedEntries = [...savedEntries];
                updatedEntries[index].expanded = true;
                setSavedEntries(updatedEntries);
            })
            .catch((error) => {
                console.error('Failed to copy:', error);
            });
    };

    const handleDelete = async (event, id) => {
        event.stopPropagation();
        console.log('Deleting entry with ID:', id);
        try {
            await axios.delete(`http://localhost:5000/api/passwords/${id}`);
            const updatedEntries = savedEntries.filter(entry => entry._id !== id);
            setSavedEntries(updatedEntries);
        } catch (error) {
            console.error('Error deleting password:', error);
        }
    };

    const decryptPassword = (cipherText) => {
        const bytes = CryptoJS.AES.decrypt(cipherText, 'asdfghjkl');
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedPassword;
    };

    return (
        <>
                <div className='md_navBar'>
                    <DashboardNavbar />
                </div>

                <div className='md_primaryScreen'>
                    <div className='md_toolBar'>
                        <div className='md_tk_greetingSection'>
                            <span>Welcome <span style={{ fontFamily: 'albula', fontWeight: 700 }}>{user.name},</span></span>
                        </div>

                        <button className='md_tk_button' onClick={toggleActivePanel}>
                            <img src={AddIcon} alt="Add Button Icon" className='md_icon'/>
                            Add Data
                        </button>
                    </div>
                    <div className={panelActive ? 'md_formBackgroundActive' : 'md_formBackground'}></div>
                    <div className={panelActive ? 'md_defHolder_active' : 'md_defHolder'}>
                        <div className="md_panel_greetingHolder">
                            <h2>Hey <span id='md_panel_name'>{user.name}</span>,</h2>
                            <p id='md_panel_greeting_subheading'>For the secure storage of your data in our database, we kindly request that you fill out the form. Thank you for your cooperation.</p>
                        </div>

                        <form className="signInForm">
                            <div className="md_panel_websiteSection">
                                <h3 id='md_panel_sectionLabel'>Website Details</h3>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Website Name"
                                        id="website"
                                        className='md_panelInput'
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </p>
                                <p>
                                <select
                                    id="website"
                                    value={websiteType}
                                    className='md_panelDropMenu'
                                    onChange={(e) => setWebsiteType(e.target.value)}
                                >
                                    <option value="" disabled selected hidden>Select Type</option>
                                    <option value="Social">Social</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Educational">Educational</option>
                                </select>

                                </p>
                            </div>

                            <div className="md_panel_credentialSection">
                                <h3 id='md_panel_sectionLabel'>Enter your credentials</h3>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        id="email"
                                        className='md_panelInput'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        id="username"
                                        className='md_panelInput'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        className='md_panelInput'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>
                            </div>

                            <div className="md_panel_optionalDataSection">
                                <h3 id='md_panel_sectionLabel'>Optional Data</h3>
                                <p>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        className='md_panelInput md_panel_commentSection'
                                        placeholder="Type your comments here..."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                </p>
                            </div>
                            
                            <button type="submit" className="md_panel_saveButton md_panelControlButtons" onClick={handleSubmit}>Save</button>
                        </form>
                        
                        <button className="md_panel_cancelButton md_panelControlButtons" onClick={toggleActivePanel}>Cancel</button>
                    </div>
                </div>
        </>
    )
}

export default RevampedDashboard;



































{/* <button onClick={() => setformActive(!formActive)}>close</button>
                    <form className="signInForm" onSubmit={handleSubmit}>
                        <p>
                            <input
                                type="text"
                                placeholder="Website"
                                id="website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </p>
                        <p>
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="Type your comments here..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                        </p>
                        <p>
                            <button type="submit" className="saveButton">Save</button>
                        </p>
                    </form> */}