export default function sum (...arg) {
    return arg.reduce((sum, a) => sum + a)
}