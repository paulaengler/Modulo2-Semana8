import '../components/Produtos.css'

function Produtos() {const categorias = [
    {
        id: 1,
        imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_cervejas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75',
        texto: 'Cervejas'
    },{
        id: 2,
        imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75',
        texto: 'Ofertas'
    }
    ,{
        id: 3,
        imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_gelo_e_agua_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75',
        texto: 'Águas e gelo'
    },{
        id: 4,
        imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75',
        texto: 'Refrigerantes'
    },{
        id: 5,
        imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_chopp_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75',
        texto: 'Chopp'
    }
];

return (
    <>
    <div className='components-produtos'>
        <div className='escolha-produtos'>
            {categorias.map(categoria => (
                <ul className='produtos' key={categoria.id}>
                    <li >
                        <img src={categoria.imagem} alt={categoria.texto} />
                        <span>{categoria.texto}</span>
                    </li>
                </ul>
            ))}
        </div>
    </div>
    
    </>
  )
}

export default Produtos