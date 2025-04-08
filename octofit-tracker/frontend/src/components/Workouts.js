import React, { useEffect, useState } from 'react';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://friendly-carnival-gxj974w9x993g67-8000.app.github.dev/api/workouts')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Workouts</h1>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout.id}>
                            <td>{workout.id}</td>
                            <td>{workout.name}</td>
                            <td>{workout.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Workouts;
