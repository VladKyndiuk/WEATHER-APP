function CustomIcon({fill,width,imageTag}) {
    return ( 
        
        <img className="imageBig" src={require(`./${imageTag}.png`)} alt=""/>
    
    );
}

export default CustomIcon;