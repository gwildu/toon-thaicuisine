import flamelink from 'flamelink'
import {getFirebaseInstance} from '../firebase'

export const getFlameLinkInstance = () => {
  const firebaseInstance = getFirebaseInstance()
  global.flamelinkInstance = process.flamelinkInstance || flamelink({firebaseApp: firebaseInstance})
  return global.flamelinkInstance
}

export const bindContentFlamelink = (contentId, callback) => {
  const FLInstance = getFlameLinkInstance()
  FLInstance.content.subscribe(contentId, (error, data) => {
    if (error) {
      console.log(`Error when trying to get flamelink data, content id: ${contentId}`, error)
    } else {
      callback(data)
    }
  })
}
