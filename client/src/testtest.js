import React, { useEffect, useState } from 'react'


export default function Testtest() {

    const [users, setUsers] = useState({})
    const [hasError, setErrors] = useState(false)

    async function loadData() {
        const res = await fetch('https://randomuser.me/api/');
        res
            .json()
            .then(res => setUsers(res))
            .catch(err => setErrors(err));
    }
    console.log(JSON.stringify(users))

    useEffect(() => {
        loadData();
    }, [])

   

    return (
        <div>
            <span>{JSON.stringify(users)}</span>
            <hr></hr>
            <span>{JSON.stringify(hasError)}</span>
        </div>

    )
}

