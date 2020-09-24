const isHundres = (position) => position === 2
const isTens = (position) => position === 1
const isUnits = (position) => position === 0

const _handle0 = (position, { previousNumber='', followingNumber='' }) => 
  isHundres(position) ? 'không' :
  isTens(position) ? 
    (followingNumber === '0' ? '' : 'linh') : 
  isUnits(position) ? 
    (['0', '1'].includes(previousNumber) ? '' : 'mươi') :
    'mươi'
  

const _handle1 = (position, { previousNumber='' }) => 
  isHundres(position) ? 'một' :
  isTens(position) ? 'mười' :
  isUnits(position) &&
    ['0', '1'].includes(previousNumber) ? 'một' : 'mốt'

const _handle4 = (position, { previousNumber='' }) =>
  isHundres(position) || isTens(position) ? 'bốn' :
  isUnits(position) && 
    (['0', '1'].includes(previousNumber) ? 'bốn' : 'tư') 

const _handle5 = (position, { previousNumber='' }) =>
  isHundres(position) || isTens(position) ? 'năm' :
  isUnits(position) &&
    (previousNumber === '0' ? 'lăm' : 'năm')
  
module.exports = {
  _handle0,
  _handle1,
  _handle4,
  _handle5
}
