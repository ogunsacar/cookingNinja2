import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Recipe.css";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { mode } = useTheme();
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find the recipe");
        }
      });

    return () => unsub();
  }, [id]);

  const handleUpdate = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Something completely different",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <div className="error">{error}</div>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <div>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleUpdate}>Update me</button>
        </div>
      )}
    </div>
  );
}
