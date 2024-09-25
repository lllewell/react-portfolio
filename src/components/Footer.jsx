import { Link } from 'react-router-dom';
import '../assets/css/Footer.css'

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <div>
                <Link to='https://github.com/lllewell'>GitHub
                </Link>
            </div>
        </footer>
        </>
    )
}