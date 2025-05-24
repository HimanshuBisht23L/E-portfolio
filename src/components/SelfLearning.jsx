import selfLearningData from '../../SelfLearning.json';
import '../styles/SelfLearning_CoverLetter.css';

export default function SelfLearning() {
  return (
    <div className='learning-main'>
      <div className="learning-container">
        {selfLearningData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h1>{section.title}</h1>

            {section.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            {section.mistakes && section.mistakes.length > 0 && (
              <>
                <h3>🛑 Important Points</h3>
                <ul className="mistakes-list">
                  {section.mistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </>
            )}

            {section.commonMistakes && section.commonMistakes.length > 0 && (
              <>
                <h3>❎ Common Mistakes</h3>
                <ul className="mistakes-list">
                  {section.commonMistakes.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </>
            )}

            <p>{section.conclusion}</p>
            <p className="final-thought">{section.finalThought}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
