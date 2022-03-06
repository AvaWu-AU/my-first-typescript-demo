import React from "react"

export const List = ({list, users}) => {
    console.log("list===",list);
    console.log("users--",users);
return <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Person Incharge</th>
        </tr>
    </thead>
    <tbody>
        {list.map(project => <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || 'Unknown'}</td>
        </tr>)}
    </tbody>
</table>
}