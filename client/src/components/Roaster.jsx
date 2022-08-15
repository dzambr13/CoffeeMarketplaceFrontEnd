const Roaster=({Roaster, CreateProduct})=>{

    return (
        <div className="roaster-info">

            <h3>{Roaster.userName}</h3>
            <p>{Roaster.businessName}</p>
            <p>{Roaster.location}</p>
            
            

            <button onClick={CreateProduct}></button>

        </div>
    )
}

export default Roaster