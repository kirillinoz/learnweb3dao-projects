import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav>
            <div className="logo">
                <h1>Crypto Boiiis</h1>
            </div>
            <div>
                <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>DAO</a></Link>
                <Link href="/defi"><a className={router.pathname == "/defi" ? "active" : ""}>DeFi</a></Link>
                <Link href="/ico"><a className={router.pathname == "/ico" ? "active" : ""}>Initial Coin Offering</a></Link>
                <Link href="/nft"><a className={router.pathname == "/nft" ? "active" : ""}>NFT Collection</a></Link>
                <Link href="/whitelist"><a className={router.pathname == "/whitelist" ? "active" : ""}>Whitelist dApp</a></Link>
            </div>
        </nav>
    )
}

export default Navbar;