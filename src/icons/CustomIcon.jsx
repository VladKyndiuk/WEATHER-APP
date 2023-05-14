function CustomIcon({fill,width,imageTag}) {
    return ( 
        
        <img src={require(`./${imageTag}.png`)} width={width} alt=""/>
    
    );
}

export default CustomIcon;