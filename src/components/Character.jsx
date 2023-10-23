function Character(props){
    return( 
        <div className={props.className}>
            <img className="img" src={props.img} alt={props.alt}/>
            <div className="content">
                <i className="logo"></i>
                <h2 className="character-name">{props.characterName}</h2>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Character
