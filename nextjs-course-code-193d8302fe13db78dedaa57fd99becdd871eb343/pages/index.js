//Will contain featured posts
import Link from "next/link"
import {useRouter} from "next/router"


function HomePage() {
    const router = useRouter
    const {id}= router.query

    return <div>
        <h1>Welcome!</h1>
        <ul>
            <li><Link href="/filtered">Filtered posts</Link></li>
            <li><Link href="/[id]">Special posts</Link></li>
        </ul>
    </div>
}

export default HomePage;    