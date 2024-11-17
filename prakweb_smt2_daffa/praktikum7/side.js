function luasLingkaran(){
  var r = document.getElementById("r_lingkaran").value;
  if (r === "") {
    alert("Masukkan jari-jari lingkaran!");
    return;
  }
  var luas = Math.PI * Math.pow(r, 2);
  document.getElementById("luas_lingkaran").value = luas.toFixed(2) + " cm²";
}

function luasTabung(){
  var r = document.getElementById("r_tabung").value;
  var t = document.getElementById("t_tabung").value;
  if (r === "" || t === "") {
    alert("Masukkan jari-jari dan tinggi tabung!");
    return;
  }
  var luas = Math.PI * Math.pow(r, 2) * t;
  document.getElementById("luas_tabung").value = luas.toFixed(2) + " cm²";
}

function nilaiRataRata(){
  var arr = document.getElementsByClassName("input_rata_rata");
  var total = 0;
  var count = 0;

  for(var i = 0; i < arr.length; i++){
    var value = parseFloat(arr[i].value);
    if (!isNaN(value)) { // Pastikan nilai valid
      total += value;
      count++;
    }
  }

  if (count !== 10) {
    alert("Masukan 10 angka!");
    return;
  }

  var rataRata = total / count;
  document.getElementById("rata_rata").value = rataRata.toFixed(2);
}