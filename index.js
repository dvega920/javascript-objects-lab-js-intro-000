var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},{key: 'value'});
  return object
}