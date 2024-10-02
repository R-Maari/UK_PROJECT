import Sideimage from "../images/bgimg.jpg";
import "./staffregistration.scss";

export class staffregistration extends Component {
  render() {
    return (
      <div>
         <div className='std-login-header'>
          <img src={Logo} alt='std-login-logo'></img>
          <span id='first-logo-name'>THEOS EDUCATIONAL ACADEMY</span><br></br>
          <span id='second-logo-name'>THRIVING FOR PERFECTION</span>
         </div>

      <div className='container-std-login'>
      <img src={Sideimage} alt='std-login-sideimage'></img>
      </div>

      <div className='form-container'>
        <h1>STUDENT LOGIN</h1>
        <form>
          <h3>Name</h3>
        </form>
        </div>
      
      </div>
    )
  }
}

export default staffregistration