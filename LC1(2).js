// LIVE CODE 1
// Nama: Muhammad Yusril Yuriis

// Menampilkan hasil
cetakPesan(29, 2, 2021);
cetakPesan(30, 2, 2021);
cetakPesan(30, 2, 2020);
cetakPesan(31, 4, 2020);
cetakPesan(21, 7, 2020);

function cetakPesan(tgl, bln, thn) {
    input = `Input tanggal: ${tgl}, ${bln}, ${thn}`
    console.log(input)

    if (cekBulan(bln) == false) {
        console.log(`Tidak ada bulan ${bln}`)
    } else if (cekBulan(bln) == true) {
        if (tgl == 29 && cekKabisat(thn) == false) {
            console.log(`Tahun kabisat tidak terjadi pada ${thn}`)
        } else if (hitungTgl(tgl, bln, thn) == 0) {
            console.log(`Tidak ada tanggal ${tgl}`)
        } else if (hitungTgl(tgl, bln, thn) != 0 && tgl > hitungTgl(tgl, bln, thn)) {
            console.log(`${namaBulan(bln)} tahun ${thn} hanya ada tanggal 1 sampai ${hitungTgl(tgl, bln, thn)}`)
        } else {
            if (cekKabisat(thn) == false) {
                console.log(`Tahun kabisat tidak terjadi pada ${thn}`)
            } else {
                console.log(`${tgl} ${namaBulan(bln)} ${thn}`)
            }
        }
    }
    console.log("")
}

// Fungsi untuk mengganti angka bulan menjadi nama bulan ("invalid" jika input tidak sesuai)
function namaBulan(bulan) {
    switch (bulan) {
        case 1:
            bulan = "Januari"
            break;
        case 2:
            bulan = "Februari"
            break;
        case 3:
            bulan = "Maret"
            break;
        case 4:
            bulan = "April"
            break;
        case 5:
            bulan = "Mei"
            break;
        case 6:
            bulan = "Juni"
            break;
        case 7:
            bulan = "Juli"
            break;
        case 8:
            bulan = "Agustus"
            break;
        case 9:
            bulan = "September"
            break;
        case 10:
            bulan = "Oktober"
            break;
        case 11:
            bulan = "November"
            break;
        case 12:
            bulan = "Desember"
            break;
        default:
            bulan = "Invalid"
            break;
    }
    return bulan
}

// Fungsi untuk menghitung banyak hari pada setiap bulan (0 jika tanggal <1)
function hitungTgl(tanggal, bulan, tahun) {
    var bln_dg_30hari = [4, 6, 9, 11];
    var bln_dg_31hari = [1, 3, 5, 7, 8, 10, 12];
    var maxTgl

    if (bln_dg_30hari.includes(bulan) == true && tanggal > 0) {
        maxTgl = 30
    } else if (bln_dg_31hari.includes(bulan) == true && tanggal > 0) {
        maxTgl = 31
    } else if (bulan == 2 && tanggal > 0) {
        if (cekKabisat(tahun) == true) {
            maxTgl = 29
        } else if (cekKabisat(tahun) == false) {
            maxTgl = 28
        }
    } else if (tanggal < 1) {
        maxTgl = 0
    }
    return maxTgl
}

// Fungsi untuk mengecek apakah input bulan sudah benar (false jika tidak)
function cekBulan(bulan) {
    var bulanValid
    if (bulan >= 1 && bulan <= 12) {
        bulanValid = true
    } else {
        bulanValid = false
    }
    return bulanValid
}

// Fungsi untuk mengecek apakah input tahun merupakan tahun kabisat (false jika bukan)
function cekKabisat(tahun) {
    if (tahun % 400 == 0) {
        kabisat = true;
    } else if (tahun % 400 != 0) {
        if (tahun % 100 == 0) {
            kabisat = false;
        } else {
            if (tahun % 4 == 0) {
                kabisat = true;
            } else {
                kabisat = false;
            }
        }
    }
    return kabisat
}

