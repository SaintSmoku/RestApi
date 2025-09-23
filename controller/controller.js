// Controller ===> MVC  / Model View Controller
// Controller is responsible for handling incoming requests, processing them, and returning appropriate responses.
// It acts as an intermediary between the Model (data) and the View (user interface).   


export function getCategories(req, res, next) {
  res.status(200).json({
    success : true,
    data : "All categories are here",
    userID : req.userID
  })
}

export function getCategory(req, res, next) {
  res.status(200).json({
    success : true,
    data : `Get the category id ${req.params.id}`
  })
}

export function createCategory(req, res, next) {
  res.status(200).json({
    success : true,
    data : "Create new category..."
  })
}

export function updateCategory(req, res, next) {
  res.status(200).json({
    success : true,
    data : `Change the category on id ${req.params.id}`
  })
}

export function deleteCategory(req, res, next) {
  res.status(200).json({
    success : true,
    data : `Delete the category id ${req.params.id}`
  })
}