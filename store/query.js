const BehaviorSubject = require('rxjs/');

const queryField = new BehaviorSubject('')

const getQuery = () => queryField.asObservable();
const setQuery = (param) => queryField.next(param)

module.exports = () => {
    return {
        getQuery, setQuery
    }
}