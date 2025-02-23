export default function Footer({ name }) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>
                &copy; {year} {name}, All Rights Reserved.
            </p>
        </footer>
    );
}
