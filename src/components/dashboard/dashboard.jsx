import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './dashboardStyles.css';
import CryptoJS from 'crypto-js';
import axios from 'axios';

function Dashboard() {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savedEntries, setSavedEntries] = useState([]);

    const { isAuthenticated, user } = useAuth0();

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
            username: username,
            password: ciphertext,
        };
        try {
            const response = await axios.post('http://localhost:5000/api/passwords', newEntry);
            const savedEntry = Array.isArray(response.data) ? response.data : [response.data];
            setSavedEntries([...savedEntries, ...savedEntry]);
            setWebsite('');
            setUsername('');
            setPassword('');
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
        const bytes  = CryptoJS.AES.decrypt(password, 'asdfghjkl');
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
        <div className="dashboardSection">
            <div className="dashboardContentSection">
                <div className="userDataSection">
                    <div className="userInputSection">
                        <div className="greetingsCard">
                            {isAuthenticated && <h1 className='greetingText'>
                                <div className="welcome">Welcome</div>
                                {user.name},
                            </h1>}
                        </div>
                        <div className="signInSection">
                            <div className='signInCardLabel'>Enter Data</div>
                            <form className="signInForm" onSubmit={handleSubmit}>
                                <p>
                                    <label htmlFor="website">Website:</label>
                                    <input
                                        type="text"
                                        placeholder="Website"
                                        id="website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <button type="submit" className="saveButton" onClick={handleSubmit}>Save</button>
                                </p>
                            </form>
                        </div>
                    </div>


                    <div className="savedDataHolder">
                        <div className="savedDataLabel">
                            <h1>Saved Entry</h1>
                        </div>

                        <div className="savedDataSection">
                        <div id="dataList" className="data-list">
                            {savedEntries.map((entry, index) => (
                                <div
                                    key={index}
                                    className={`savedEntry ${entry.expanded ? 'expanded' : ''}`}
                                    onClick={() => handleEntryClick(index)}
                                >
                                    <h3>{entry.website}</h3>
                                    {entry.expanded && (
                                        <>
                                            <div className="detailSection">
                                                <div className="dropDetailSection">
                                                    <span className='details'>
                                                        <span className='label'>Website:</span>
                                                        <span className='labelValue'>{entry.website}</span>
                                                    </span>
                                                    <br />
                                                    <span className='details'>
                                                        <span className='label'>Username:</span>
                                                        <span className='labelValue'>{entry.username}</span>
                                                    </span>
                                                    <br />
                                                    <span className='details'>
                                                        <span className='label'>Password:</span>
                                                        <span className='labelValue'>{decryptPassword(entry.password)}</span>
                                                    </span>
                                                    <br />
                                                </div>

                                                <div className="dropButtonSection">
                                                    <button className='copyButton' onClick={() => copyToClipboard(entry.password, index)}>Copy Password</button>
                                                    <button className='deleteButton' onClick={(event) => handleDelete(event, entry._id)}>Delete</button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;