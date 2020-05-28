function genMenuKey(a) {
    let s = '';
    let ss = [];
    a.forEach(
        value => {
            s = s.concat('/', value);
            ss.push(s)
        }
    );
    return ss
}


export default genMenuKey;
