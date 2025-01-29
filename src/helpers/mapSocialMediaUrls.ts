interface IRedesProps{
    name:string, color:string
}
interface IRedesResultProps extends IRedesProps{
    url:string
}

export function mapSocialMediaUrls(redes:IRedesProps[], urls:string[]){
    // Create an array to hold the result
    const result:IRedesResultProps[] = [];
    
    // Loop through each URL
    urls.forEach(url => {
        // Check if any name in 'redes' exists in the URL
        redes.forEach(({ name, color }) => {
        if (url.includes(name)) {
            // If a match is found, add an object to the result array
            result.push({ name, color, url });
        }
        });
    });
    
    return result;
}