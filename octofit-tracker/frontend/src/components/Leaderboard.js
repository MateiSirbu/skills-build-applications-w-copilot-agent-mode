import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('https://friendly-carnival-gxj974w9x993g67-8000.app.github.dev/api/leaderboard')
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Leaderboard</h1>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.username}</td>
                            <td>{entry.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
