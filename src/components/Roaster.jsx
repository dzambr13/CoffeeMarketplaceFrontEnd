const Roaster=({Roaster, CreateProduct, updateRoaster})=>{

    return (
        <div className="roaster-info">

            <h3>{Roaster.userName}</h3>
            <p>{Roaster.businessName}</p>
            <p>{Roaster.location}</p>
            
            
            <button onClick={updateRoaster}>Edit profile</button>
            <button onClick={CreateProduct}>Add new product</button>

        </div>
    )
}

export default Roaster