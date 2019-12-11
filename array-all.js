/*
Soal No. 1 (Range)
Buatlah sebuah function dengan nama range() yang menerima dua parameter berupa number. Function mengembalikan sebuah array yang berisi angka-angka mulai dari angka parameter pertama hingga angka pada parameter kedua. Jika parameter pertama lebih besar dibandingkan parameter kedua maka angka-angka tersusun secara menurun (descending). 
------------------------------------------------------------------------------------------------------------------------------------------------
struktur fungsinya seperti berikut range(startNum, finishNum) {} 
Jika parameter pertama dan kedua tidak diisi maka function akan mereturn nilai -1
*/

function range(startNum, finishNum){
    var awal = startNum;
    var akhir= finishNum; 
    var final = [];
    if(awal === undefined || akhir === undefined) {
        console.log(-1)
    } else {
        if(awal > akhir) {
            for(var i = awal; i>=akhir; i--){
                final.push(i) 
            }
        } else {
            for(var i=awal; i<=akhir; i++){
                final.push(i)
            }
        }
        console.log(final)
    }
    return '';
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1;

// =============================================================================================================================================
/*
Soal No. 2 (Range with Step)
Pada soal kali ini kamu diminta membuat funciton rangeWithStep yang mirip dengan function range di soal sebelumnya namun parameternya ditambah dengan parameter ketiga yaitu angka step yang menyatakan selisih atau beda dari setiap angka pada array. Jika parameter pertama lebih besar dibandingkan parameter kedua maka angka-angka tersusun secara menurun (descending) dengan step sebesar parameter ketiga.
------------------------------------------
struktur fungsinya seperti berikut rangeWithStep(startNum, finishNum, step) {}
*/
function rangeWithStep(startNum, finishNum, step) {
    var awal = startNum;
    var akhir = finishNum;
    var nilai = step;
    var final = [];
    if(awal < akhir){
        for(var i=awal; i<=akhir; i+=nilai){
            final.push(i);
        }
    } else {
        for(var i=awal; i>=akhir; i+= nilai){
            final.push(i)
        }
    }
    console.log(final)
    return '';
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, -1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, -4)) // [29, 25, 21, 17, 13, 9, 5]

// ================================================================================================================================================
/*
Soal No. 3 (Sum of Range)
Buatlah sebuah function dengan nama sum() yang menerima tiga parameter yaitu angka awal deret, angka akhir deret, dan beda jarak (step).  Function akan mengembalikan nilai jumlah (sum) dari deret angka. contohnya sum(1,10,1) akan menghasilkan nilai 55. 
----------------------------------------------------------------------------------------------------------------------------------------------
ATURAN: Jika deret naik( parameter ke-1 lebih besar dari parameter ke-2) dan parameter ke-3 tidak diisi maka stepnya adalah 1. Sebaliknya jika deret turun dan parameter ke-3 tidak diisi maka stepnya adalah -1. 
*/
function sum(firstNum, nextNum, step){
    var awal = firstNum;
    var akhir = nextNum;
    var nilai = step;
    var sum = 0;
    if(awal === undefined && akhir === undefined && nilai === undefined){
        sum ;
        console.log(sum);
    } else if(akhir === undefined && nilai === undefined){
        console.log(awal);
    } else{
        if (awal < akhir){
            if(nilai === undefined){
                nilai = 1;
                for(var i = awal; i<= akhir ; i+= nilai){
                    sum += i;
                }
            } else {
                for(var i = awal; i<= akhir ; i+= nilai){
                    sum += i;
                }
            }

        } else {
            if(nilai === undefined) {
                nilai = -1;
                for(var i=awal; i>= akhir; i+= nilai){
                    sum += i
                }
            } else {
                for(var i=awal; i>= akhir; i+= nilai){
                    sum += i
                }
            }
        }

        console.log(sum)
    } 
    return ''
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, -2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0

// =============================================================================================================================================
/*
Soal No. 4 (Array Multidimensi)
Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array). 
Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.

Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
*/
function dataHandling(e) {
    var arr = e;
    var id ='';
    var nama ='';
    var ttl ='';
    var hobi ='';
    for(var i = 0; i< arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            id = arr[i][0];
            nama = arr[i][1];
            ttl = arr[i][2]+' '+arr[i][3];
            hobi = arr[i][4]
        }
        console.log('Nomor ID :',id+'\n'+'Nama Lengkap : '+nama+'\n'+'TTL : '+ttl+'\n'+'Hobi : '+hobi+'\n')
    }
    return ''
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);


// ==========================================================================================================================================
/*
Soal No. 5 (Balik Kata)
Kamu telah mempelajari beberapa method yang dimiliki oleh String dan Array. 
String sebetulnya adalah sebuah array karena kita dapat mengakses karakter karakter pada sebuah string layaknya mengakses elemen pada array. 
Buatlah sebuah function balikKata() yang menerima sebuah parameter berupa string dan mengembalikan kebalikan dari string tersebut. 
*/
function balikKata(huruf){
    var kata =huruf;
    var hasil ='';
    var array =[];
    
    for(var i = j=kata.length; i>=0; i-- ){
        array.push( kata[i]);
    }
    hasil = array.join('');
    return hasil;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

// =============================================================================================================================================
/*
-Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
-Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
-Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
-Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
-Misal angka bulan 01, tuliskan "Januari"
Gunakan switch case untuk menuliskan bulan di atas.
-Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
-Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
-Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
*/

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

function dataHandling2(e){
    var panggil = e;
    panggil.splice(1,1,'Roman Alamsyah Elsharawy');
    panggil.splice(2,1,'Provinsi Bandar Lampung');
    panggil.splice(4,1,"Pria", "SMA Internasional Metro");
    console.log(panggil); //memanggil bulan berdasrkan angka
    var tgl = panggil[3];
    var Arr_tgl = tgl.split('/');
    var baru_tgl = Arr_tgl;
    var bulan = parseInt(Arr_tgl[1]);
    switch(bulan){
        case 01: {console.log('Januari'); break;}
        case 02: {console.log('Febuari'); break;}
        case 03: {console.log('Maret'); break;}
        case 04: {console.log('April'); break;}
        case 05: {console.log('Mei'); break;}
        case 06: {console.log('Juni'); break;}
        case 07: {console.log('Juli'); break;}
        case 08: {console.log('Agustus'); break;}
        case 09: {console.log('September'); break;}
        case 10: {console.log('Oktober'); break;}
        case 11: {console.log('November'); break;}
        case 12: {console.log('Desember'); break;}
        default: {console.log('##');}
    }
    console.log(baru_tgl);
    var gabung_tgl = Arr_tgl.join('-')
    console.log(gabung_tgl);
    var nama = String(panggil[1]);   
    var namaSlice = nama.slice(0, 14)
    console.log(namaSlice);
    return '';
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
