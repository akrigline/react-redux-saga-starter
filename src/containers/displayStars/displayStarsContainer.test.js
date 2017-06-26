import {mapStateToProps, propsMapping} from './displayStarsContainer'
import createReduxStore from '../../redux/store'

describe('displayStars container', () => {
  console.log('Hello!')
  it('should map state to props', () => {
    const store = createReduxStore()
    const state = store.getState()
    const mappedProps = mapStateToProps(state)
    const keys =  Object.keys(mappedProps)
    let errors = []
    console.log(mappedProps)
    keys.forEach(key => {
      if (mappedProps[key] === undefined) { errors.push(key) }
    })
    console.log("HEY", keys)

    expect(errors.length).toEqual(4)
  })
  it('should have a propsMapping', () => {
    expect(typeof propsMapping.fetchBasic).toEqual('function')
  })
})


// let state = store.getState()
// const mappedProps = mapStateToProps(state)
// const keys =  Object.keys(mappedProps)
// keys.forEach(key => {if(mappedProps[key] === undefined) throw new Error(key + ' is undefined')})