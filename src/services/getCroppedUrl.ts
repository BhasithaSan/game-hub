import noImage from "../assets/Image Placeholder/no-image-placeholder.webp";

const getCroppedUrl=(url:string)=>{

    if(!url) return noImage;

    const index=url.indexOf('media/');
    return url.slice(0,index+"media/".length)+"crop/600/400/"+url.slice(index+"media/".length)

}

export default getCroppedUrl