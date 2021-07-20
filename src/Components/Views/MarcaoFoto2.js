import foto from '../../Assests/img.foto/russianDrummer.jpg'

const MarcoFoto2=()=>{

    return(
        <img style={{
            maxwidth: '100%',
            maxheight: '100%',marginTop: '80px', marginBottom: '80px',display: 'flex', alignItems: 'center'
        }} class="img-thumbnail" src={foto}/>
        
    )

}

export default MarcoFoto2