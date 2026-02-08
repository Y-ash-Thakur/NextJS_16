const UserDetails = ({params}: {params:{id: string}}) => {
    const { id } = params;
    return (  
        <h1>showing details for user {id}</h1>
    )
}
export default UserDetails
