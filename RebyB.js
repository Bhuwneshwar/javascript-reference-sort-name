const i = (i) => { return document.getElementById(i) }

const t = (t) => { return document.getElementsByTagName(t) }

const n = (n) => { return document.getElementsByName(n) }

const c = (c) => { return document.getElementsByClassName(c) }

const q = (q) => { return document.querySelector(q) }

const qA = (qA) => { return document.querySelectorAll(qA) }

const stopS = (S) => { return i(S).addEventListener('submit', (e) =>  {e.preventDefault() }) }

