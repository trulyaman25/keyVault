import React, { useState, useEffect } from 'react';
import './dashboardStyles.css';
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savedEntries, setSavedEntries] = useState([]);

    useEffect(() => {
        const storedEntries = localStorage.getItem('savedEntries');
        if (storedEntries) {
            setSavedEntries(JSON.parse(storedEntries));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('savedEntries', JSON.stringify(savedEntries));
    }, [savedEntries]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {
            website: website,
            username: username,
            password: password,
            expanded: false,
        };
        setSavedEntries([...savedEntries, newEntry]);
        setWebsite('');
        setUsername('');
        setPassword('');
    };

    const handleEntryClick = (index) => {
        const updatedEntries = [...savedEntries];
        updatedEntries[index].expanded = !updatedEntries[index].expanded;
        setSavedEntries(updatedEntries);
    };

    const copyToClipboard = (password, index) => {
        navigator.clipboard.writeText(password)
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

    const handleDelete = (index) => {
        const updatedEntries = savedEntries.filter((entry, i) => i !== index);
        setSavedEntries(updatedEntries);
    };

    const { isAuthenticated, user } = useAuth0();

    return (
        <div className="dashboardSection">
            <div className="dashboardContentSection">
                <div className="userDataSection">
                    <div className="userInputSection">
                        <div className="greetingsCard">
                            {isAuthenticated && <h1 className='greetingText'>
                                                    <div className="wel">Welcome</div>
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
                                    <button type="submit" className="saveButton">Save</button>
                                </p>
                            </form>
                        </div>
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
                                                    <span className='details'><span className='label'>Website:</span> <span className='labelValue'>{entry.website}</span></span>
                                                    <br />
                                                    <span className='details'><span className='label'>Username:</span> <span className='labelValue'>{entry.username}</span></span>
                                                    <br />
                                                    <span className='details'><span className='label'>Password:</span> <span className='labelValue'>{entry.password}</span></span>
                                                    <br />
                                                </div>
                                                <div className="dropButtonSection">
                                                    <button className='copyButton' onClick={() => copyToClipboard(entry.password, index)}>Copy Password</button>
                                                    <button className='deleteButton' onClick={() => handleDelete(index)}>Delete</button>
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
    );
}

export default Dashboard;
