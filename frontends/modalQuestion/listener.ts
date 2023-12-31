export const finish = function (data, name, t) {
  setTimeout(() => {
    this.Static.body.style.overflow = 'hidden';
  }, 100)
}

const changeLanguage = function ({ name, nameOrig, code }) {
  this.Static.lang.eng_name = name
  this.Static.lang.orig_name = nameOrig
  this.Static.lang.code = code
  this.Static.langValue = `${name} (${nameOrig})`
  this.init()
}

export const cross = [{ "front": "changeLanguage", fn: changeLanguage }]