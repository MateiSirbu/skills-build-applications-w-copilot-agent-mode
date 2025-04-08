import React, { useEffect, useState } from 'react';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://friendly-carnival-gxj974w9x993g67-8000.app.github.dev/api/teams')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Teams</h1>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.id}>
                            <td>{team.id}</td>
                            <td>{team.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teams;
