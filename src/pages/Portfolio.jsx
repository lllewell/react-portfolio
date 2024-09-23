import employeeTracker from '../images/employee-tracker.png'
import noteTaker from '../images/note-taker.png'
import jateTextEditor from '../images/jate.png'
import svgGenerator from '../images/svg.png'

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img style={{ width: '100%' }} src={employeeTracker} alt="employee-tracker" />
        </div>
        <div className='col-6'>
          <img style={{ width: '100%' }} src={noteTaker} alt="" />
        </div>
        <div className='col-6'>
          <img style={{ width: '100%' }} src={jateTextEditor} alt="jate-text-editor" />
        </div>
        <div className='col-6'>
        <img style={{ width: '100%' }} src={svgGenerator} alt="svg-generator" />
        </div>
      </div>
    </div>
  );
}
