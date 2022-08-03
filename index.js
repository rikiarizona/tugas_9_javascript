function detailRumah() {
    var rumah ={
        tipe: '36plus',
        luasbangunan: '36m',
        luastanah: '110m',
        warna: 'hijau',
        atap: 'multi roof',
        pondasi: 'cakar ayam',
        posisi: 'hook'
    }
for(var x in rumah){
    console.log(rumah[x])
}
}
detailRumah()