import '../styles/CoverLetter.css';

export default function CoverLetter() {
  return (
    <div className="cover-letter">
      <h1 className="cover-title">📮 My Cover Letter</h1>
      <p className="cover-description">
        Click below to download the professionally written cover letter that summarizes key learnings and reflections.
      </p>
      <a
        href="/CoverLetter.pdf"
        download
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        📄 Download PDF
      </a>
    </div>
  );
}
