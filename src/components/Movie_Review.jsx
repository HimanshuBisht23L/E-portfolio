import reviewData from "../../moviereview.json";
import "../styles/MovieReview.css";

export default function Movie_Review() {
  return (
    <div className="movie-review-container">
      <h2>Movie Review: {reviewData.movie_title}</h2>
      <p><strong>Date:</strong> {reviewData.date}</p>

      <h3>1) Favorite Dialogue and Why?</h3>
      <blockquote>"{reviewData.review.favorite_dialogue_and_why.dialogue}"</blockquote>
      <p>{reviewData.review.favorite_dialogue_and_why.explanation}</p>

      <h3>2) Personal Review</h3>
      <p>{reviewData.review.personal_review}</p>

      <h3>3) Lessons Learned from the Movie</h3>
      <ul>
        {
          reviewData.review.lessons_learned.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))
        }
      </ul>

      <h3>4) Related Concepts Learned in the Classroom</h3>
      <ul>
        {
          reviewData.review.related_classroom_concepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))
        }
      </ul>

      <h3>Conclusion</h3>
      <p>{reviewData.review.conclusion}</p>
    </div>
  );
}
