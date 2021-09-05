import React from 'react'

const Get = () => {
    const [data, setData] = React.useState([])
    console.log(data)

    const loaddata = () => {
        const result = localStorage.getItem('todos');
        setData(result)
        console.log(result)
    }

    React.useEffect(() => {
        loaddata();
    }, [])
    return (
        <div>
            {data.map((user, index) => (
                <>
                    <h3>{index + 1}</h3>
                    <h4>sno: {user.title}</h4>
                    <h4>sno: {user.desc}</h4>
                </>
            ))}
        </div>
    )
}

export default Get;
