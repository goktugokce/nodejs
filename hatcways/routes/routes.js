const express = require('express');
const router = new express.Router();
const { isValidSort, sortResult, isValidDirection, isValidTag, isReponseEmpty, tagCounter, loopOperation } = require('../utils/constant_operations');

router.get('/ping', async (req, res) => {
  res.status(200).send({
    "success": true
  });
})

router.get('/posts', async (req, res) => {
  const response = await getPostData(req.query);
  if (!isValidTag(req.query)) {
    res.status(400).send({ "error": "Tags parameter is required" });
  }
  else if (req.query.tags && !isValidSort(req.query)) {
    res.status(400).send({ "error": "sortBy parameter is invalid" });
  }
  else if (req.query.tags && !isValidDirection(req.query)) {
    res.status(400).send({ "error": "direction parameter is invalid" });
  }
  else {
    if(isReponseEmpty(response)){
      res.status(404).send({ "error": "Cannot found any post related to the tag"});
    }
    else{
      result = sortResult(response, req.query.direction, req.query.sortBy);
      res.status(200).send({"posts": result});
    }
    
  }
})



const getPostData = async (query) => {
  const queryArray = tagCounter(query)
  try {
    const result = await loopOperation(queryArray)
    return (result)
  } catch (error) {
    return (error);
  }
}


module.exports = router;