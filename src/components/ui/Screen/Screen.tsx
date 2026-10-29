import './Screen.scss'

interface Props {
    src: string
    alt?: string
}

type MediaType = 'image' | 'video' | 'audio' | 'unknown'

function getMediaType(src: string): MediaType {
    const ext = src.split('.').pop()?.toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'avif'].includes(ext ?? '')) return 'image'
    if (['mp4', 'webm', 'ogg', 'mov'].includes(ext ?? '')) return 'video'
    if (['mp3', 'wav', 'flac', 'aac', 'ogg'].includes(ext ?? '')) return 'audio'
    return 'unknown'
}

export default function Screen({ src, alt = '' }: Props) {
    const type = getMediaType(src)

    return (
        <div className="screen">
            {type === 'image' && (
                <img src={src} alt={alt} />
            )}
            {type === 'video' && (
                <video controls>
                    <source src={src} />
                </video>
            )}
            {type === 'audio' && (
                <audio controls>
                    <source src={src} />
                </audio>
            )}
            {type === 'unknown' && (
                <p className="screen__unsupported">Unsupported media type</p>
            )}
        </div>
    )
}
