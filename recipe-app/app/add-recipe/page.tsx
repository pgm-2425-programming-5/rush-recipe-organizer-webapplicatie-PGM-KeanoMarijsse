// src/components/forms/RecipeForm.tsx
"use client";

import React from "react";
import Button from "../../components/common/Button";

import recipes from "../data/recipes";

interface RecipeFormProps {
  name: string;
  ingredients: string[];
  instructions: string;
  onNameChange: (name: string) => void;
  onIngredientsChange: (ingredients: string) => void;
  onInstructionsChange: (instructions: string) => void;
  onCategoryChange: (category: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  error?: string;
  succes?: boolean;
}

const RecipeForm: React.FC<RecipeFormProps> = ({
  name,
  ingredients,
  instructions,
  onNameChange,
  onIngredientsChange,
  onInstructionsChange,
  onCategoryChange,
  onSubmit,
  loading = false,
  error,
  succes,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md mt-4"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-sm font-medium text-gray-700"
        >
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => onIngredientsChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="instructions"
          className="block text-sm font-medium text-gray-700"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => onInstructionsChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          onChange={(e) => onCategoryChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {loading ? "Loading..." : "Submit"}
      </Button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {succes && <p className="mt-2 text-sm text-green-600">Recipe added!</p>}
    </form>
  );
};

export default RecipeForm;
