import employeeTracker from '../images/employee-tracker.png'
import seoRefactor from '../images/html-seo-refactor.png'
import jateTextEditor from '../images/jate.png'
import svgGenerator from '../images/svg.png'

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <img style={{ width: '35%' }} src={employeeTracker} alt="employee-tracker" />
        </div>
        <div className='col-12'>
          <img style={{ width: '25%' }} src={seoRefactor} alt="html-seo-refactor" />
        </div>
        <img style={{ width: '35%' }} src={jateTextEditor} alt="jate-text-editor" />
        <img style={{ width: '35%' }} src={svgGenerator} alt="svg-generator" />
      </div>
    </div>
  );
}
