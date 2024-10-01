import recipes from '../data/recipes';

export default function Recipes() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">All Recipes</h1>
            <div>
                {recipes.map((recipe, index) => (
                    <div key={index} className="mb-8 p-4 border rounded shadow-lg">
                        <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
                        <h3 className="text-xl font-medium mb-1">Ingredients:</h3>
                        <ul className="list-disc list-inside mb-2">
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3 className="text-xl font-medium mb-1">Instructions:</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
