function randomHello(name) {
    const helloThere = 'hello there';
    const howdy = 'howdy';
    const youSuck = 'meh you suck';
    const spacer = ' ';
    if(name.length === 4) {
        return howdy + spacer + name;
    } else if(name.length === 5) {
        return helloThere + spacer + name;
    } else {
        return youSuck + spacer + name;
    }
}

export default randomHello;
