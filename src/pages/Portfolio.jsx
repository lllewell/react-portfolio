import employeeTracker from '../images/employee-tracker.png'
import noteTaker from '../images/note-taker.png'
import jateTextEditor from '../images/jate.png'
import svgGenerator from '../images/svg.png'
import ecommerceDB from '../images/ecommerce.png'
import cliREADMEGenerator from '../images/cli-readme-generator.png'
import { Link } from 'react-router-dom'
import '../Porfolio.css'

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <Link to='https://github.com/lllewell/employee-tracker-js'>
            <img style={{ width: '100%' }} src={employeeTracker} alt="employee-tracker" />
          </Link>
        </div>
        <div className='col-6'>
          <Link to='https://github.com/lllewell/note-taker-app'>
            <img style={{ width: '100%' }} src={noteTaker} alt="" />
          </Link>
        </div>
        <div className='col-6'>
          <Link to='https://github.com/lllewell/text-editor-pwa'>
            <img style={{ width: '100%' }} src={jateTextEditor} alt="jate-text-editor" />
          </Link>
        </div>
        <div className='col-6'>
          <Link to='https://github.com/lllewell/svg-generator'>
            <img style={{ width: '100%' }} src={svgGenerator} alt="svg-generator" />
          </Link>
        </div>
        <div className='col-6'>
          <Link to='https://github.com/lllewell/e-commerce-back-end-orm'>
            <img style={{ width: '100%' }} src={ecommerceDB} alt="ecommerce-database" />
          </Link>
        </div>
        <div className='col-6' id='readme-generator'>
          <Link to='https://github.com/lllewell/readme-generator'>
            <img style={{ width: '100%' }} src={cliREADMEGenerator} alt="readme-generator" />
          </Link>
        </div>
      </div>
    </div>
  );
}
