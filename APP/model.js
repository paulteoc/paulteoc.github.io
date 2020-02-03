class t_eq2_model{
    a;
    b;
    c;
    x1_re;
    x1_im;
    x2_re;
    x2_im;
    apiWeatherUrl;
    constructor()
    {
        this.a = 1;
        this.b = 1;
        this.c = 1;
        this.x1_re = 0;
        this.x1_im = 0;
        this.x2_re = 0;
        this.x2_im = 0;
    }
    set_coefficients(a , b)
    {
        this.a = a;
        this.b = b;
    }
    solve()
    {
        var delta = this.b * this.b - 4 * this.a * this.c;

        if (delta >= 0) {
            this.x1_re = (-this.b - Math.sqrt(delta)) / (2 * this.a);
            this.x2_re = (-this.b + Math.sqrt(delta)) / (2 * this.a);
            this.x1_im = 0;
            this.x2_im = 0;
        } else {
            this.x1_re = this.b / (2 * this.a);
            this.x2_re = -this.b / (2 * this.a);
            this.x1_im = (-Math.sqrt(-delta)) / (2 * this.a);
            this.x2_im = (+Math.sqrt(-delta)) / (2 * this.a);
        }
    }
    get_solutions(numar, conversie)
    {
        if(conversie == "Bin"){
            var numarBin = Number(numar).toString(2)
            return numarBin
        }
        if(conversie == "Hex"){
            var numarHex = Number(numar).toString(16)
            return numarHex
        }
        if(conversie == "Oct"){
            var numarOct = Number(numar).toString(8)
            return numarOct
        }
    }
}







//                          /* MODEL - pastreaza date si regulile lor de functionare;                         
//                                - contine functiile aplicatiei; */                                          
 

// class t_eq2_model{
//   a;
//   b;
//  // apiWeatherUrl;
//   constructor()
//   {
//       this.a = 1;
//       this.b = 1;
     
//   }
//   set_coefficients(a , b)
//   {
//       this.a = a;
//       this.b = b;
//   }
//   get_solutions(numar, conversie)
//   {
//       if(conversie == "Binar"){
//           var numarBin = dec_to_bho(numar,'B');
//           return numarBin
//       }
//       if(conversie == "Hexazecimal"){
//           var numarHex = dec_to_bho(numar,'H');
//           return numarHex
//       }
//       if(conversie == "Octal"){
//           var numarOct = dec_to_bho(numar,'O');
//           return numarOct
//       }
//   }
// }
