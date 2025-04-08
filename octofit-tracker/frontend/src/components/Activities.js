import React, { useEffect, useState } from 'react';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://friendly-carnival-gxj974w9x993g67-8000.app.github.dev/api/activities')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Activities</h1>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>{activity.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Activities;
