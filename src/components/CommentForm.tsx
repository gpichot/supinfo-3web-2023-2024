import React from "react";

export default function CommentForm() {
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(rating, comment);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        Rating: {rating}, comment: {comment}
      </p>
      <input
        type="number"
        name="rating"
        min={1}
        max={5}
        step={1}
        value={rating}
        onChange={(e) => setRating(e.currentTarget.valueAsNumber)}
      />
      <textarea
        name="comment"
        onChange={(e) => setComment(e.currentTarget.value)}
      >
        {comment}
      </textarea>
      <button type="submit">Valider</button>
    </form>
  );
}
