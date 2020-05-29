
const User = require('../domain/user')
const glob = require('glob-promise')
const UserRepository = require('../infraestructure/userrespository')
const SessionService = require('../application/sessionservice')
const { DuplicateError, NotExistsError } = require('../utils/customerrors')
const glog = require('glob');
const promisify = require('util').promisify;
const globPromise = promisify(glog).bind(null);
async function getValidators() {
    const src = 'app/validators/**/*.js'
    const files = await globPromise(src);
    const modules = files
        .map(file => file.replace('app', '..'))
        .map(file => require(file))
        .filter(m => typeof m === 'object')
    console.log(files);
    return files
}

/* async function getValidators() {
    const src = 'app/validators//*.js'
    const files = await glob.promise(src);
    let modules = []
    console.log(files)
    
    for (let file of files){
        let modpath = process.cwd() + "/" + file;

        require(modpath)
        modules.push(require(modpath))
    }
    return modules
} */
//read()
//getValidators()
module.exports = getValidators