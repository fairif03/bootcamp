#include <cstdlib>
#include <iostream>
using namespace std;

int main () {
    int n, r;
    cout << "masukan nilai n:";
    cin >> n ;
    while (n<0){
        cout << "Masukan Nilai N Kembali : ";
        cin >> n;

    }
    cout << "Masukan Nilai r: ";
    cin >> r;
    while (r < 0){
        cout << "Masukan Nilai R Kembali: ";
        cin >> r;
    }
    cout << "permutasi" << r << "dari" << n << " = " << permutasi (n, r) << endl ;

    system ("PAUSE");
    return (0);
}

int permutasi (int x, int y) {
    int Nilai_Permut, selisih;
    int faktorial= 1;
    selisih = x - y ;
    while (x > 0) {
        faktorial = faktorial * x ;
        x = x - 1;
    }
    Nilai_Permut = faktorial/selisih ;
    return(Nilai_Permut);
}