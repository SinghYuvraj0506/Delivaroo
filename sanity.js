import {createClient} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"


const client = createClient({
    projectId:'x7y1vo2c',
    dataset:'production',
    useCdn:true,
    apiVersion:"2021-10-21"
})

// fetches the url for any url image we have
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)


export default client;