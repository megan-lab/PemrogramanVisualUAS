//Rumus Luas Kerucut
function luasAlas(){
    let r = document.getElementById('rak').value;
    let hasiLuasAlas = 3.14 * (r * r);
    document.getElementById('hasilAlasKerucut').value = hasiLuasAlas;
}
function luasSelimut(){
    let r = document.getElementById('rsk').value;
    let s = document.getElementById('ssk').value;
    let hasilLuasSelimut = 3.14 * r * s;
    document.getElementById('hasilSelimutKerucut').value = hasilLuasSelimut;
}

function luasPermukaan(){
    let Alas = document.getElementById('hpa').value;
    let Selimut = document.getElementById('hps').value;
    let hasilLuasPermukaan = (1 * Alas) + (1 * Selimut);
    document.getElementById("hasilPermukaanKerucut").value = hasilLuasPermukaan;
}

//Luas Tabung
function luasAlasTabung(){
    let r = document.getElementById('rat').value;
    let hasiLuasAlas = 3.14 * (r * r);
    document.getElementById('hasilAlasTabung').value = hasiLuasAlas;
}
function luasSelimutTabung(){
    let r = document.getElementById('rst').value;
    let t = document.getElementById('tst').value;
    let hasilLuasSelimut = 2 * 3.14 * r * t;
    document.getElementById('hasilSelimutTabung').value = hasilLuasSelimut;
}
function luasPermukaanTabung(){
    let hasiLuasAlas = document.getElementById('hasilAlasTabung').value;
    let hasilLuasSelimut = document.getElementById('hasilSelimutTabung').value;
    let hasilLuasPermukaan = hasiLuasAlas + hasilLuasSelimut;
    document.getElementById("hasilPermukaanTabung").value = hasilLuasPermukaan;
}

//Luas Kubus
function luasKubus(){
    let s = document.getElementById('raku').value;
    let hasiLuasKubus = 6 * (s * s);
    document.getElementById('hasilLuasKubus').value = hasiLuasKubus;
}


//Luas Prisma Segitiga
function luasAlasPrisma(){
    let a = document.getElementById('aap').value;
    let t = document.getElementById('tap').value;    
    let hasiLuasAlas = (0.5 * a * t);
    document.getElementById('hasilLuasAlasPrisma').value = hasiLuasAlas;
}
function luasTegakPrisma(){
    let t_prisma = document.getElementById('t_prismatp').value;
    let a = document.getElementById('atp').value;
    let hasilLuasSelimut = (t_prisma * a)
    document.getElementById('hasilLuasTegakPrisma').value = hasilLuasSelimut;
}

function luasPermukaanPrisma(){
    let a = document.getElementById('app').value;
    let t = document.getElementById('tpp').value;
    let t_prisma = document.getElementById('t_prismapp').value;
    let hasilLuasPermukaan =  (2 * (0.5 * a * t)) + (3 * (t_prisma * a));
    document.getElementById("hasilPermukaanPrisma").value = hasilLuasPermukaan;
}


//Jajar Genjang
function luasJarjarGenjang(){
    let a = document.getElementById('ajg').value;
    let t = document.getElementById('tjg').value;    
    let hasiLuas = a * t;
    document.getElementById("hasilLuasJajarGenjang").value = hasiLuas;
}
function kelilingJarjarGenjang(){
    let a = document.getElementById('akjg').value;
    let s = document.getElementById('sjg').value;    
    let hasiLuas = (2 * a) + (2* s);
    document.getElementById("hasilKelilingJajarGenjang").value = hasiLuas;
}