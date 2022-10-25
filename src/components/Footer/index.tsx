import './style.css';
import NewsLetter from '../news-letter';

export default function Footer() {
  return (
    <footer>
      <NewsLetter />
      <div className="footer--content">
        <div className="footer--content--menu"></div>
        <div className="footer--content--social-midia"></div>
      </div>
      <div className="footer--bottom"></div>
    </footer>
  );
}
