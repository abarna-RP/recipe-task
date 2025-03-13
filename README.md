# Recipes API

A RESTful API for managing recipes using Node.js, Express.js, and MongoDB.

𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧 𝐄𝐚𝐜𝐡 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭:
【=】【=】【=】【>】Description: Creates a new recipe.

Request Body Parameters:

title (String, Required): The title of the recipe.
ingredients (Array of String): A list of ingredients.
instructions (String): The cooking instructions.
category (String): The category of the recipe.
Success Response (201 Created):

Example:

JSON

{
    "_id": "65...",
    "title": "Spaghetti Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
    "instructions": "Cook spaghetti. Fry pancetta. Mix eggs, cheese, and pepper. Combine and toss.",
    "category": "Pasta",
    "__v": 0
}
【=】【=】【=】【>】Description: Retrieves a list of all recipes.

Success Response (200 OK):

Example:

JSON

[
    {
        "_id": "65...",
        "title": "Spaghetti Carbonara",
        "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
        "instructions": "Cook spaghetti. Fry pancetta. Mix eggs, cheese, and pepper. Combine and toss.",
        "category": "Pasta",
        "__v": 0
    },
    {
        "_id": "65...",
        "title": "Chicken Curry",
        "ingredients": ["Chicken", "Onions", "Tomatoes", "Spices"],
        "instructions": "Cook chicken with spices.",
        "category": "Main Course",
        "__v": 0
    }
]
【=】【=】【=】【>】 Description: Retrieves a single recipe by its ID.

Path Parameters:

id (String, Required): The ID of the recipe to retrieve.
Success Response (200 OK):

Example:

JSON

{
    "_id": "65...",
    "title": "Spaghetti Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
    "instructions": "Cook spaghetti. Fry pancetta. Mix eggs, cheese, and pepper. Combine and toss.",
    "category": "Pasta",
    "__v": 0
}
【=】【=】【=】【>】Description: Updates an existing recipe by its ID.

Path Parameters:

id (String, Required): The ID of the recipe to update.
Request Body Parameters: (Same as Create Recipe, but all are optional for update)

title (String): The updated title of the recipe.
ingredients (Array of String): The updated list of ingredients.
instructions (String): The updated cooking instructions.
category (String): The updated category of the recipe.
Success Response (200 OK):

Example:

JSON

{
    "_id": "65...",
    "title": "Updated Spaghetti Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Guanciale", "Pecorino Romano", "Black Pepper"],
    "instructions": "Cook spaghetti. Fry guanciale. Mix eggs, cheese, and pepper. Combine and toss.",
    "category": "Pasta",
    "__v": 0
}
【=】【=】【=】【>】Description: Deletes a recipe by its ID.
Path Parameters:

id (String, Required): The ID of the recipe to delete.
Success Response (200 OK):

Example:

JSON

{
    "message": "Recipe deleted"
}
![alt image](https://github.com/abarna-RP/recipe-task/blob/main/postman%20output.png)
