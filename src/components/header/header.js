import template from './header.template';
import './header.css';

export default () => {
  const bodyEl = document.querySelector('body');
  console.log(bodyEl);
  bodyEl.insertAdjacentHTML('afterbegin', template);
};
