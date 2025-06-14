import axios from "axios"

//_____
const baseUrl = 'http://localhost:3002/contacts'
const getResponseData = ({ data }) => data

//_____
const getAll = () => (
  axios
    .get(baseUrl)
    .then(getResponseData)
)

//_____
const create = newObject => (
  axios
    .post(baseUrl, newObject)
    .then(getResponseData)
)

//_____
const replaceNumber = (targetId, newNumber) => (
  axios
    .patch(`${baseUrl}/${targetId}`, { number: newNumber })
    .then(getResponseData)
)

//_____
const remove = targetId => (
  axios
    .delete(`${baseUrl}/${targetId}`)
    .then(getResponseData)
)

//_____
export default {
  getAll,
  create,
  replaceNumber,
  remove,
}