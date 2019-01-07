import changeCase from "change-case"

function changeKeys(transformer, obj) {
  let objectKeys

  if (Array.isArray(obj)) {
    return obj.map(function keysMap(key) {
      if (typeof key === "string") {
        return transformer(key)
      }

      return changeKeys(transformer, key)
    })
  } else if (typeof obj === "object" && obj !== null) {
    objectKeys = Object.keys(obj)
    return objectKeys
      .map(function keysMap(key) {
        return transformer(key)
      })
      .reduce(function keysReducer(object, changedKey, index) {
        let objValue
        let transformedValue

        objValue = obj[objectKeys[index]]
        transformedValue = changeKeys(transformer, objValue)
        object[changedKey] = transformedValue
        return object
      }, {})
  }

  return obj
}

export default class {
  static camelCase(object) {
    if (typeof object === "string") {
      return changeCase.camelCase(object)
    }
    return changeKeys(changeCase.camelCase, object)
  }

  static snakeCase(object) {
    if (typeof object === "string") {
      return changeCase.snakeCase(object)
    }
    return changeKeys(changeCase.snakeCase, object)
  }

  static paramCase(object) {
    if (typeof object === "string") {
      return changeCase.paramCase(object)
    }
    return changeKeys(changeCase.paramCase, object)
  }
}
