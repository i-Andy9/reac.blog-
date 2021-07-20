
import foto from '../../Assests/img.foto/gateto.jpg'

const MarcoFoto=()=>{

    return(
        <img style={{
            maxwidth: '100%',
            maxheight: '100%',marginTop: '80px', marginBottom: '80px',display: 'flex', alignItems: 'center'
        }} class="img-thumbnail" src={foto}/>
        
    )

}

export default MarcoFoto