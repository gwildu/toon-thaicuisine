import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBQ26S7vBq7lzMbUg7-mHbmhzDrX1pzpls",
  authDomain: "toon-thaicuisine.firebaseapp.com",
  databaseURL: "https://toon-thaicuisine.firebaseio.com",
  projectId: "toon-thaicuisine",
  storageBucket: "toon-thaicuisine.appspot.com",
  messagingSenderId: "220485197270"

}

export function getFirebaseInstance () {
  global.firebaseInstance =
    global.firebaseInstance || firebase.initializeApp(firebaseConfig)
  return global.firebaseInstance
}

export function convertFirebaseListIntoArray (list, fields) {
  const result = []
  Object.keys(list).forEach((key, index) => {
    const item = {key}
    fields.forEach(field => {
      item[field] = list[key][field]
    })
    result[index] = item
  })
  return result
}

export function bindContentFirebase (contentId, callback) {
  const firebase = getFirebaseInstance()
  firebase
    .database()
    .ref(`${contentId}/`)
    .on('value', function (snapshot) {
      callback(snapshot.val())
    })
}
