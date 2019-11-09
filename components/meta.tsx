import Head from "next/head"

interface IMetaProps {
    title: string
}

const Meta = (props: IMetaProps) => {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
            <link href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" rel="stylesheet" />
        </Head>
    )
}

export default Meta