let listaBanners = ['banner1', 'banner2', 'banner3'];
let bannerIndice = 0;

setInterval(
    function(){

        bannerIndice = (bannerIndice == listaBanners.length - 1)
        ? 0 : bannerIndice  +1;
        bannerIndice++;
        TrocaBanner(listaBanners[bannerIndice]);
        bannerIndice} 
    ,5000
)

let uf=['SP', 'MG']
let capitais=['São Paulo', 'Belo Horinzonte'];
function MudaEstado(estado){
    alert('Estado: '+uf[estado-1]+'\n Capital: '+ capitais[estado-1]);
}

function TrocaBanner(banner){
    console.log(banner);
    document.querySelector('#banner1').className="invisivel";
    document.querySelector('#banner2').className="invisivel";
    document.querySelector('#banner3').className="invisivel";
    document.querySelector('#'+ banner).className="visivel";
}