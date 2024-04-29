import count from './script/count.js'
import sum from './script/sum.js'

// css 资源必须在入口处引入
import css from './css/index.css'
import less from './less/index.less'
import sass from './sass/index.sass'
import scss from './sass/index.scss'
import stylus from './stylus/index.styl'

console.log(count(2, 1))
console.log(sum(1, 2, 3))