export default function (language,path) {
    require(`./${language}/${path}.json`)
}