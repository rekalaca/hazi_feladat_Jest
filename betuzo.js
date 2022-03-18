function szovegeles(betu) {

    var i = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜŰùúûüűÑñŠšŸÿýŽž'.split('');
    var o = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUUuuuuuNnSsYyyZz'.split('');

    var map = {};
    i.forEach((i, idx) => map[i] = o[idx]);

    let num = 0;


    return {
        csere: betu.replace(/[^A-Za-z0-9]/g, function (ch) {

            if (map[ch]) {
                num++
            }

            return map[ch] || ch;
        })

        , num

    }
}



module.exports = szovegeles;