import coverLetterData from '../../CoverLetter.json';
import '../styles/SelfLearning_CoverLetter.css';

export default function CoverLetter() {
  return (
    <div className="learning-main">
      <div className="learning-container">
        <h1>{coverLetterData.title}</h1>

        {coverLetterData.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}

        <h3>🛑 Some Important Points We Discussed:</h3>
        <ul className="mistakes-list">
          {coverLetterData.importantPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h3>⚠️ Detailed Common Errors:</h3>
        <ul className="mistakes-list">
          {coverLetterData.commonErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>

        <p>{coverLetterData.conclusion}</p>
        <p className="final-thought">{coverLetterData.finalThought}</p>
      </div>
    </div>
  );
}
