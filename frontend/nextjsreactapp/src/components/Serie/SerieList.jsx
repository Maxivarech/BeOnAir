import Link from 'next/link'
import Serie from './Serie'

const SerieList= ({series}) => {

    if(!series) return null
    
    return (
        <div>
            {series.map((ser) => (
                <Link href={`/series/${ser.id}`}>
                    <Serie serie={ser}/>
                </Link>
            ))}
        </div>
    )
}

export default SerieList