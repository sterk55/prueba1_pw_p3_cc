const obtenerIp = () => {
    const ids = []
    for (var i = 0; i < 5; i++) {
        ids.push(Math.floor(Math.random() * 600) + 1)
    }
    return ids;

}
const obtenerNombres = async (id) => {

    const nombres = []
    for (var i = 0; i < 5; i++) {
        const { name } = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id[i]}`
        ).then((r) => r.json());
        nombres.push(name)
    }
    console.log(nombres)
    return nombres;
}
const obtenerImagenes = (id) => {

    const imagenes = []
    for (var i = 0; i < 5; i++) {

        imagenes.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id[i]}.svg`)
    }
    console.log(imagenes)
    return imagenes;
}
const obtenerObjetoPokemon = async () => {

    const ip = obtenerIp();
    const nom = await obtenerNombres(ip);
    const img = obtenerImagenes(ip);
    const nombreImg = []
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 4)
        console.log(r)
        nombreImg.push({ "id": ip[r], "nombre": nom[r], "ima": img[r] })
    }
    console.log(nombreImg)
    return nombreImg;


}
const obtenerPokemonsOpciones = async () => {
    console.log(await obtenerObjetoPokemon())

    return await obtenerObjetoPokemon()


}
export default obtenerPokemonsOpciones