

const {myFileWriter,myFileUpdater,myFileReader,myFileDeleter} = require('./index.js')

myFileWriter('input.txt','Hello World')
myFileUpdater('input.txt','Hello Kushal!')
myFileReader('input.txt')
myFileDeleter('input.txt')