var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes
}

function updateObjectWithKeyAndValue (recipes, key, value){
  var newRecipes = ({}, recipes, {key: 'value'})
  return newRecipes
}