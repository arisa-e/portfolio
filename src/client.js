import sanityClient from "@sanity/client"
import  ImageUrlBuilder  from "@sanity/image-url"

export const client=sanityClient({
    projectId:process.env.REACT_APP_SANITY_STUDIO_API_PROJECT_ID ,
    dataset:"production",
    apiVersion:"2022-02-25",
    useCdn:true,
    token: process.env.REACT_APP_SANITY_STUDIO_API_TOKEN
}) 

const builder =ImageUrlBuilder(client)

export const urlFor =(source)=>builder.image(source)