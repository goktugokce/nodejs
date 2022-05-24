const SORTING_CONSTANTS = ["id", "reads", "likes", "popularity"];
const DIRECTION_CONSTANTS = ["desc", "asc"];
const axios = require('axios');

const sortValidator = (sortKey) => {
  return SORTING_CONSTANTS.includes(sortKey);
}

const directionValidator = (directionKey) => {
  return DIRECTION_CONSTANTS.includes(directionKey);
}

const sortResult = (data, direction, sortKey) => {
  let sortedResult = null;
  if(!sortKey){
    sortKey = 'id'
  }
  if(direction === 'desc'){
    sortedResult = (data).sort(function(a,b){return b[sortKey] - a[sortKey]});
  }
  else{
    sortedResult = (data).sort(function(a,b){return a[sortKey] - b[sortKey]});
  }
  return sortedResult;
}

const isValidDirection = (query) => {
  if(query.hasOwnProperty('direction')){
    if(!directionValidator(query.direction)){
      return false;
    }
  }
  return true;
}

const isValidSort = (query) => {
  if(query.hasOwnProperty('sortBy') ){
    if(!sortValidator(query.sortBy)){
      return false;
    }
  }
  return true;
}

const isValidTag = (query) => {
  if(!query.hasOwnProperty('tags') || query.tags === ''){
    return false;
  }
  return true;
}

const isReponseEmpty = (response) => {
  if((response).length === 0){
    return true;
  }
  return false;
}

const tagCounter = (query) => {
  let tagArray = [];
  if(isValidTag(query)){
    if(query.tags.includes(",")){
      tagArray = query.tags.split(",")
    }
    else{
      tagArray.push(query.tags)
    }
  }
  return tagArray;
}

const loopOperation = async (tagArray) => {
  let tagResponse;
  for (const tag of tagArray) {
    tagResponse = await axios.get('https://api.hatchways.io/assessment/blog/posts?tag=' + tag);
  }
  const uniqueResponse = [...new Map((tagResponse.data.posts).map(item =>
    [item['authorId'], item])).values()];
  
  return (uniqueResponse)
};


module.exports={
  sortValidator,
  directionValidator,
  sortResult,
  isValidDirection,
  isValidSort,
  isValidTag,
  isReponseEmpty,
  tagCounter,
  loopOperation
}