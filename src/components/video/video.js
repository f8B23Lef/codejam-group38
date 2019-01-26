import template from './video.template';
import './video.css';

export default () => {
  const bodyEl = document.querySelector('body');
  bodyEl.insertAdjacentHTML('afterbegin', template);
};
