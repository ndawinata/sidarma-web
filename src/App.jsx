// import logo1 from './background.png';
import './App.css';
// import artikel from './Article.json'
import image from './gifAndro.gif'

// const pWindow=window.innerWidth

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <div class="container">
          <div class="row">
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}} class="col-sm-7">
              <img src={image} style={{width:450}} alt="screenshoot" />
            </div>
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}} class="col-sm-5">
              <div style={{fontSize:32, fontWeight:'bold', margin:2}}>Sidarma Mobile.</div>
              <div style={{fontSize:20, fontFamily:'Caveat', marginBottom:15}}>( Sistem Integrasi Data Radar Cuaca Mandiri )</div>
              {/* <div style={{fontSize:14, width:pWindow/2.5, margin:15}}>
                {artikel.about}
              </div> */}
              <button type="button" className="btn btn-outline-light m-2"><a style={{color:'white', textDecoration:'none'}} href={"https://drive.google.com/u/0/uc?export=download&confirm=qkrV&id=1k74x1osVsPXzlzAV4EOmsqR-8r9YckaA"} download="simpel.rar">Download</a></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
